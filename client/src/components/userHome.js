import React, { Component, useEffect, useState } from "react";
import QRCode from 'qrcode.react';

export default function UserHome({ userData }) {
  
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <br />

          <QRCode value={userData.email} />
    <br/>
    <br/>
          <button  className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
