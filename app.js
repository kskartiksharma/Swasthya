const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
  const schedule = require('node-schedule');


app.use(express.urlencoded({ extended: false }));

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
  "mongodb://localhost:27017";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
require("./medication");
require("./imageDetails");
require("./Appointment");

const Medication = mongoose.model("MedicationInfo");
const User = mongoose.model("UserInfo");
const Images = mongoose.model("ImageDetails");
const Appointment = mongoose.model('AppointmentInfo');

schedule.scheduleJob('0 0 * * *', deleteExpiredAppointments);

async function deleteExpiredAppointments() {
  try {
    const currentDate = new Date();
    // Find appointments whose date and time have passed
    const expiredAppointments = await Appointment.find({ date: { $lt: currentDate } });
    // Delete expired appointments
    await Appointment.deleteMany({ _id: { $in: expiredAppointments.map(a => a._id) } });
  } catch (err) {
    console.log(err);
  }
}

app.post('/bookappointment', async (req, res) => {
  try {
    const email = req.body.email;
    const existingAppointments = await Appointment.find({ email: email });
    // Delete previous appointments if any
    if (existingAppointments.length > 0) {
      await Appointment.deleteMany({ email: email });
    }

    // Create a new appointment
    const newAppointment = new Appointment(req.body);
    const savedAppointment = await newAppointment.save();
    res.status(201).json({ id: savedAppointment._id });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error creating appointment!');
  }
});
app.get('/appointment/:email', async (req, res) => {
  try {
    const email = req.params.email;
    // Find the latest appointment for the given email
    const appointment = await Appointment.findOne({ email }).sort({ date: 1 });
    console.log(appointment);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/appointment/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      res.status(404).send('Appointment not found');
    } else {
      res.json(appointment);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching appointment');
  }
});

// Get all appointments that have not yet been approved
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find({ isApproved: false });
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching appointments');
  }
});

// Update an appointment's isApproved field
app.patch('/appointment/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).send('Invalid appointment ID');
    return;
  }
  try {
    const appointmentId = mongoose.Types.ObjectId(req.params.id);
    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { $set: { isApproved: req.body.isApproved } },
      { new: true }
    );
    if (!appointment) {
      res.status(404).send('Appointment not found');
    } else {
      res.json(appointment);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating appointment');
  }
});


// Fetch appointment data
// app.get('/appointment/:id', async (req, res) => {
//   try {
//     const appointment = await Appointment.findById(req.params.id);
//     res.json(appointment);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Error fetching appointment data!');
//   }
// });

app.get('/test/UserInfo/:email', async (req, res) => {
  // console.log("entry");
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // console.log(user);
    return res.json(user);
  } catch (error) {
    console.log('Failed to retrieve user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/test/MedicationInfo/:email', async (req, res) => {
  // console.log("entry");
  const email = req.params.email;

  try {
    const user = await Medication.find({ email }).sort({ date: -1 });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // console.log(user);
    return res.json(user);
  } catch (error) {
    console.log('Failed to retrieve user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/medication-form", async (req, res) => {
  const { username, medicationList, dosage, date, email } = req.body;

  try {
    const newMedication = new Medication({
      username,
      medication: medicationList, // use medicationList array here
      dosage,
      date,
      email,
    });

    await newMedication.save();
    res.status(201).send("Medication form data saved successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});

app.listen(5000, () => {
  console.log("Server Started");
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adarsh438tcsckandivali@gmail.com",
        pass: "rmdklolcsmswvyfw",
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "thedebugarena@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) { }
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});


app.post("/upload-image", async (req, res) => {
  const { base64 } = req.body;
  try {
    await Images.create({ image: base64 });
    res.send({ Status: "ok" })

  } catch (error) {
    res.send({ Status: "error", data: error });

  }
})

app.get("/get-image", async (req, res) => {
  try {
    await Images.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/paginatedUsers", async (req, res) => {
  const allUser = await User.find({});
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const lastIndex = (page) * limit

  const results = {}
  results.totalUser=allUser.length;
  results.pageCount=Math.ceil(allUser.length/limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    }
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    }
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results)
})
