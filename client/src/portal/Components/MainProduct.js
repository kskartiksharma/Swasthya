import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useEffect } from 'react';
import prescribtion2 from "../images/prescribtion2.jpg";
import Complains1 from "../images/complains.jpeg";
import appointmentImg from "../images/appointment.png";
import Aos from "aos";
import "aos/dist/aos.css";
import medRecordImg from "../images/prescribtion1.jpg";
import approveAppImg from "../images/appointment.png";
import newUserImg from "../images/dept-01.jpg";
import comNsggestion from "../images/complains.jpeg";
import setting from "../images/setting.png";
import { useNavigate } from 'react-router-dom';
export default function MainProduct() {
    const navigate = useNavigate();
    const [userData,setUserData] = useState("");
    function handleEvent (){
        window.location.href = "./check"
    }
    
    function Medication (){
        if(userData == "Admin")
         window.location.href = "./medi-search"
        else{
            const fetchEmail = JSON.parse(localStorage.getItem("userData"))?.email;
            console.log(fetchEmail);
            const myEmail = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/test/MedicationInfo/${fetchEmail}`);
                    const data = await response.json();
                    if (Array.isArray(data) && data.length === 0) {
                        window.alert('USER NOT FOUND');
                    } else {
                        // setUserInfo(data);
                        navigate('/medi-info', { state: { userInfo: data } });
                    }
                } catch (error) {
                    // setError(error.message);
                } 
            } 
            myEmail()
        }

    }
    function Appointment() {
        window.location.href = "./appointment"
    }
    function ApproveAppointment() {
        window.location.href = "./approveappointment"
    }
    function userSettings() {
        window.location.href = "./adminHome"
    }
    function Complains() {
        window.location.href = "./Complains"
    }
    function userRegister() {
        window.location.href = "./sign-up"
    }

    const isLoggedIn = window.localStorage.getItem("loggedIn");
    
   
    useEffect(
        () => {
            const Data = localStorage.getItem("userData");
            if(Data) {
                setUserData(JSON.parse(Data).userType);
            };
            Aos.init({
                duration: 2000
        });

        }
    )
    
  return (
    <div className='container mt-1' id="Services" >
        <section className='row mt-3' >
            <h2 className='text-center fw-bold' style={{color:"rgb(23, 123, 137)" ,marginTop:'50px'}}>
                Our Services
            </h2>
            <p className='text-center'>

                 We at Swasthya offer wide range of variety that suits your needs and preferences.

            </p>

        </section>

        <div className='container'>
            {userData == "Admin" ? 
            <div className='row my-2 mx-2'>
                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up" >
                    <div class="card" >
                        <div className='card-img'>
                            <img src={medRecordImg} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                            <button onClick={handleEvent} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn '>Edit <br/>Medical Record</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up">
                    <div class="card">
                        <div className='card-img'>
                            <img src={prescribtion2} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                            <button onClick={Medication} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn'>Retrieve <br/> Medical Records</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up">
                    <div class="card">
                        <div className='card-img'>
                            <img src={setting} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                              <button onClick={userSettings} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn'>User<br/>Settings</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up">
                    <div class="card">
                        <div className='card-img'>
                            <img src={approveAppImg} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                              <button onClick={ApproveAppointment} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn'>Approve <br/> Appointment</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up">
                    <div class="card">
                        <div className='card-img'>
                            <img src={newUserImg} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                              <button onClick={userRegister} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn'>New User <br/>Register</button>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className='row my-2 mx-2'>

                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up">
                    <div class="card">
                        <div className='card-img'>
                            <img src={prescribtion2} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                            <button onClick={Medication} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn'>Retrieve <br/> Medical Records</button>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up">
                    <div class="card">
                        <div className='card-img'>
                            <img src={appointmentImg} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                              <button onClick={Appointment} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn'>Book <br/> Appointment</button>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-4 col-md-6 col-sm-12 my-3' data-aos = "fade-up">
                    <div class="card">
                        <div className='card-img'>
                            <img src={Complains1} class="card-img-top" alt="..." height={"300px"}/>  
                            <div class="overlay black"></div>
                            <div class="overlay white"></div>
                        </div>
                        <div class="card-body text-center">
                              <button onClick={Complains} disabled={isLoggedIn == "true" ? false : true} className='btn btn-info mx-2 px-5 card-btn'>Complaint`s <br/> and Suggestions</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
  }
        </div>
    </div>
  )
}
