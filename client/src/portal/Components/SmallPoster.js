import React, {Component, useEffect,useState} from 'react';
import QRCode from 'qrcode.react';
// import "./portal.css";
import MainProduct from './MainProduct';
// import SmallPoster from './SmallPoster';
import Footer from './Footer';

export default function SmallPoster({props}) {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  // const logout = () => {
  //   window.localStorage.clear();
  //   window.localStorage.href = "./sign-in";
  // };
console.log(props);
  return (
    <>
    {isLoggedIn == "true" ? 
    <div className='my-small-poster container my-3'>
    <div className='col-lg-6 col-md-12'>
        <h2 style={{fontWeight:"bolder", color:"rgb(23,123,137)"}} className="h1 px-5 pt-4">
            PATIENT Details
        </h2>
        <ul>
          <li>
            {props.userDetails.fname}
          </li>
          <li>
            {props.userDetails.email}
          </li>
          <li>
            <QRCode value={props.userDetails.email} />
          </li>
        </ul>
    </div>
    {/* <div className='col-lg-6 col-md-12 '>
    <div className="auth-wrapper">
  <div className="auth-inner">
    <div>
      Name<h1>{userDetails.fname}</h1>
      Email <h1>{userDetails.email}</h1>
      <br />

      <QRCode value={userDetails.email} />
<br/>
<br/>
      <button onClick={logout} className="btn btn-primary">
        Log Out
      </button>
    </div>
  </div>
</div>
    </div> */}
</div>
:
<>
</>
}
</>
    
  )
}
