// import React from 'react';
import React, { useState } from 'react';
import jsQR from 'jsqr';

export default function QrPage() {
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState(""); 
      const [imageDataUrl, setImageDataUrl] = useState('');
    
      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setImageDataUrl(reader.result);
        };
        reader.readAsDataURL(file);
      };
    
      const handleQrScan = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, img.width, img.height);
          const imageData = ctx.getImageData(0, 0, img.width, img.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            const [email, password] = code.data.split(',');
            setEmail(email.trim())
            setPassword(password.trim())
            setImageDataUrl('');
            
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
          } else {
            alert('QR code not detected. Please try again.');
          }
        };
        img.src = imageDataUrl;
        e.preventDefault();
      };
      function handleSubmit(e) {
        
      }
  return (
    <div style={{marginTop:"100px"}}>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {imageDataUrl && <img src={imageDataUrl} alt="QR code" />}
      </div>
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='my-btn' onClick={() => handleQrScan()}>Scan QR Code</button>
      </div>
      <br />
      <br />
      {/* <form onSubmit={handleQrScan}>
        <label>
          Email:
          <input type="email" value={email} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" value={password} />
        </label>
        {/* <div className="d-grid">
            <button type="submit" className="my-num">
              Submit
            </button>
          </div> */}
      {/* </form> */} 
    </div>
  )
}
