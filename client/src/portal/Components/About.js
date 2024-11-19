import React , {useEffect} from 'react'
import Navbar from './Navbar'
import Sec3 from './Sec3'
import Footer from './Footer'
import staffPhoto from "../images/staff.jpg";
import drPhoto from "../images/doctor.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export default function About() {
    useEffect (() => {
        Aos.init({
            duration: 2000
        })
    }) ;
  return (
    <>
        <div className='container-fluid p-0' style={{marginTop:"80px"}} id='About'>
            <div className="container row m-auto pt-4" >
            <div className="col-lg-6 col-md-12" data-aos = "fade-up">
                    <img src={drPhoto} alt=""  width={"500px"} height={"500px"}/>
                </div>
                <div className="col-lg-6 col-md-12" data-aos = "fade-up">
                    <h4>
                        About Us
                    </h4>
                    {/* <p className='text-sec-1'>Swasthya</p> */}
                    <h2 className='h2'>
                        20+ Years of Experience in Medical
                    </h2>
                        <h3 className=''>
                            Dr. RN Sharma
                        </h3>
                        <p>
                        MBBS,MD,Dip Diab,PGCD
                        </p>
                        <ul className='list-text p-0'>
                            <li><i class="fa-solid fa-check px-2"></i>General Physician</li>
                            <li><i class="fa-solid fa-check px-2"></i>Diabetologist</li>
                        </ul>
                    <b>
                        Professional Staff
                    </b>
                    <br/>
                    <p>
                    This is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since
                    </p>
                    <br/>
                    <b>
                    98% Success Rate
                    </b>
                    <br/>
                    <p>
                    This is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since
                    </p>
                    <br/>
                    <b>
                    Modern Equipments
                    </b>
                    <br/>
                    <p>
                    This is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since
                    </p>
                    <br/>
                </div>
                

            </div>
        </div>
      {/* <Footer></Footer> */}
      </>
      
  )
}
