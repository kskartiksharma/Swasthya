import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='footer-wave'>
        </div>
        <div className='my-footer-content row container-fluid m-0'>
            <div className='col-lg-2 pt-5 '>
                <h4>Company</h4>
                <ul className='p-0' style={{textAlign: "justify"}}>
                    <li style={{listStyle : "none"}}><a className='footer-a'><i class="fa-solid fa-circle-chevron-right px-1"></i>Home</a></li>
                    <li style={{listStyle : "none"}}><a className='footer-a'><i class="fa-solid fa-circle-chevron-right px-1"></i>About</a></li>
                    <li style={{listStyle : "none"}} className=""><a className='footer-a'><i class="fa-solid fa-circle-chevron-right px-1"></i>Contact</a></li>
                </ul>
            </div>
            <div className='col-lg-3  pt-5 '>
                <h4>Services</h4>
                <ul className='p-0' style={{textAlign: "justify"}}>
                    <li style={{listStyle : "none"}}><a className='footer-a'><i class="fa-solid fa-circle-chevron-right px-1"></i>medical records</a></li>
                    <li style={{listStyle : "none"}}><a className='footer-a'><i class="fa-solid fa-circle-chevron-right px-1"></i>Book Appointment</a></li>
                </ul>
            </div>
            <div className='col-lg-3 pt-5'>
                <h4>Social Media</h4>
                <p>Follows us on these following platforms.</p>
                <a style={{fontSize:"30px" ,padding: "0px 8px"}} className="footer-a"><i class="fa-brands fa-facebook"></i></a>
                <a style={{fontSize:"30px" ,padding: "0px 8px"}} className="footer-a"><i class="fa-brands fa-instagram"></i></a>
                <a style={{fontSize:"30px" ,padding: "0px 8px"}} className="footer-a"><i class="fa-brands fa-twitter-square"></i></a>
            </div>
            <div className="col-lg-4 pt-5">
                <h4>Contact Us</h4>
                        <span>
                            <i class="bi bi-telephone"></i> contact no. : 
                        </span>
                        <span className='ps-2'>
                         +123456789
                        </span>
                        <br/>
                        <span>
                            <i class="bi bi-envelope"></i>  Email :
                        </span>
                        <span className='ps-2'>
                        Swasthya@gmail.com
                        </span>
                        <br/>
                        <span>
                             <i class="bi bi-geo-alt"></i>  Address :
                        </span>
                        <span className='ps-2'>
                       Rameshwar nagar
                        </span>
            </div>
        </div>
        <div className='footer-last m-0'>
            <p className='m-0 py-3'>© 2022-2023  - All Rights Reserved By Kartik Kuljeet Kanika.</p>
        </div>
    </div>
  )
}
