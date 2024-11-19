import React, { Component, useState } from "react";
import Footer from "../portal/Components/Footer";
import video1 from "../portal/videos/SWASTHYA.mp4";
import video2 from "../portal/videos/loggedIn.mp4";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }
     const check = localStorage.getItem("loggedIn");
     function QrPage() {
      window.location.href = "./QrPage";
     }

  return (
    <>
    {/* <Navbar/> */}
    {check == "true" ? <div className="container text-center" style={{marginTop:"140px"}}>
      <video src={video2} width="50%" height="50%" autoplay="true" muted = "true" style={{boxSizing:"border-box"}} />
    </div>
    :
    <div className="row login-page justify-content-around mt-5">
      <div className="col-lg-6 col-md-12 col-sm-12">
      <video src={video1} width="100%" height="500" autoplay="true" muted = "true" loop="true" />
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
      <div className="my-card">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

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

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="my-num">
              Submit
            </button>
          </div>
          <div className="d-grid">
              <button type="submit" onClick={QrPage} className="my-num my-2">
                Scan Qr Code
              </button>
            </div>
          <span className="forgot-password text-right my-2 float-sm-end">
            Dont Have An Account ? 
            <a href="/sign-up"> Sign Up</a>
          </span>
        </form>
      </div>
      </div>
    </div>
}
    
    
    <Footer/>
    </>
  );
}
