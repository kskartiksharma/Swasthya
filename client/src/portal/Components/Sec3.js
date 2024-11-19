import React, { useEffect } from 'react'
import doctor from "../images/dr2.png"
import Aos from "aos";
import "aos/dist/aos.css";


export default function Sec3() {
    useEffect (() => {
        Aos.init({
            duration: 2000
        })
    }) ;
  return (

    <div className='sec3' id='Features'>
        <div className='container'>
            <section className='row mt-3'>
                <h2 className='text-center fw-bold' style={{color:"rgb(23, 123, 137)" ,marginTop:'50px'}}>
                    Our Features
                </h2>
                <p className='text-center'> 
                    We at Swasthya offer wide range of variety that suits your needs and preferences.
                </p>
            </section>
            <div className='container'>
                <div class="row mb-5 mt-5">
                    <div class="col-lg-4 col-md-6 col-sm-12 my-col" data-aos = "fade-up">
                        <div class="content m-0">
                            <h5><i class="bi bi-activity"></i>Emergency Care</h5>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 my-col" data-aos = "fade-up">
                        <div class="content">
                            <h5><i class="bi bi-person-plus-fill"></i>Qualified Doctor</h5>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 my-col" data-aos = "fade-up">
                        <div class="content">
                            <h5><i class="bi bi-clock-fill"></i>24/7 Hours Services</h5>
                            <p>
                                Usage of the Internet is becoming more common due to rapid advancement of technology and power
                            </p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

            