import React, { Component, useEffect, useState } from "react";
import AdminHome from "./adminHome";
import SmallPoster from "../portal/Components/SmallPoster"
import UserHome from "./userHome";
import Home from "../portal/Components/Home";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.userType == "Admin") {
          setAdmin(true);
        }

        // Save data in LocalStorage
        localStorage.setItem("userData", JSON.stringify(data.data));

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);


  return <Home/>;
}



