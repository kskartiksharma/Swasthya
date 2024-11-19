import React , {useEffect} from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect (() => {
        Aos.init({
            duration: 2000
        })
    }) ;
  return (
    <div className="" id='Premises'>
        <div className='container'>
            <section className='row mt-3'>
                <h2 className='text-center fw-bold' style={{color:"rgb(23, 123, 137)" ,marginTop:'50px'}}>
                    Facilities and Premises
                </h2>
                <p className='text-center'> 
                    We at Swasthya offer wide range of variety that suits your needs and preferences.
                </p>
            </section>
            <div className="row" data-aos = "fade-up">
              <div className="col-md-6 col-sm-12 col-lg-6 offset-lg-3">
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="http://www.shantinursinghome.com/wp-content/uploads/2013/11/indoor-passage.png" className="d-block w-100" alt="..." height={"400px"}/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://www.hospitalsforsale.biz/wp-content/uploads/2022/03/r3-a.jpg" className="d-block w-100" alt="..." height={"400px"}/>
                      </div>
                      <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/corridor-hospital-hospital-premises-are-empty_406939-7352.jpg?w=400" className="d-block w-100" alt="..." height={"400px"}/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
