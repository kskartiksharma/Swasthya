import React, { useEffect } from 'react'
import { useState } from 'react';
import QRCode from 'qrcode.react';
import Footer from '../portal/Components/Footer';




export default function UserInformation(props) {
    const [fname,setFname] = useState();
   const[email,setEmail]=useState();
   const[password,setPassword]=useState(props.password);
   const [showQRCode, setShowQRCode] = useState(false);
    useEffect(()=>{
        const Data = localStorage.getItem("user");
        console.log(Data);
        if (Data){
            setEmail(JSON.parse(Data).email);
            setFname(JSON.parse(Data).fname);
            setPassword(JSON.parse(Data).password);
            setShowQRCode(true);
        }
        
    })
    
  return (
    <>
    <div className='card container' style={{marginTop:"100px"}}>
    <h1 style={{textAlign: 'center'}}>User Information</h1>
    <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-3">
        <table className='align-middle mt-5 container'>
        <tr>
            <td>
                <b>Name : {fname} </b>
            </td>
            <td>
            <b>Email : {email}</b>
            </td>
        </tr>
        <tr>
            <td style={{padding:"100px"}}>
                 <b>
                    Qr Code : {showQRCode && <QRCode value={`${email},${password}`} />}
                 </b>
            </td>
        </tr>
    </table>
        </div>  
    </div>
</div >
<Footer/>
    </>
  )
}
