import React, { Component, useState } from "react";
import Footer from "../portal/Components/Footer";
import video1 from "../portal/videos/SWASTHYA.mp4";

export default function SignUp(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const user = { email: email, password: password, fname: fname };

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "Admin@12345") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      
      // console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");

            // console.log(props.sendUserData);
            // props.sendUserData(email,password);
            // localStorage.setItem("regData", JSON.stringify(data.data));\
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));


            window.location.href = "./userInformation";
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <>
    {/* <Navbar/> */}
    <div className="row login-page justify-content-around mt-5">
    <div className="col-lg-6 col-md-12 col-sm-12">
      <video src={video1} width="100%" height="500" autoplay="true" muted = "true" loop="true" />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="my-card col-lg-8">
        <form onSubmit={handleSubmit}>
          <h3>Registration</h3>
          <div>
            Register As :- <br/>
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
              required
            />
            User <br/>
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
              required
            />
            Admin
          </div>
          
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
                required
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="my-num" >
              Register
            </button>
          </div>
          {/* <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p> */}
        </form>
      </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
