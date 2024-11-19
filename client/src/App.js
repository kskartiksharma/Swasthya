import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Home from "./portal/Components/Home";
import MedicationForm from "./components/MedicationForm";
import Check from "./components/Check";
import MedicationSearch from "./components/MedicationSearch";
import MedicationInfo from "./components/MedicationInfo";
import About from "./portal/Components/About";
import Navbar from "./portal/Components/Navbar";
import Footer from "./portal/Components/Footer";
import Appointment from "./components/Appointment";
import ApproveAppointments from "./components/ApproveAppointments";
import AdminHome from "./components/adminHome";
import Complains from "./components/Complains";
import UserInformation from "./components/UserInformation";
import QrPage from "./components/QrPage";
// import ImageUpload from "./components/imageUpload.";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  
  const sendUserData=(email,password)=>{
    if(email && password){
      setEmail(email);
      setPassword(password);
    }
  }
  return (
    <>
    <Navbar/>
    <Router>
       <div className="App">
         <Routes>
          <Route
            exact
            path="/"
            element={<Home/>}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp  sendUserData={sendUserData}/>} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/medi-form" element={<MedicationForm />} />
          <Route path="/check" element={<Check />} />
          <Route path="/medi-search" element={<MedicationSearch/>} />
          <Route path="/medi-info" element={<MedicationInfo/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/approveappointment" element={<ApproveAppointments />} />
           <Route path="/adminHome" element={<AdminHome />} />
           <Route path="/Complains" element={<Complains/>} />
           <Route path="/UserInformation" element={<UserInformation email={email} password={password}/>} />

           <Route path="/QrPage" element={<QrPage/>} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
    {/* <Footer/> */}
  </>
    
  );
}

export default App;
