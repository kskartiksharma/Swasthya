const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        date: Date,
        time: String,
        doctor: String,
        isApproved: Boolean,
        
    },
    {
        collection: "AppointmentInfo",
    }
);

mongoose.model("AppointmentInfo", appointmentSchema);

