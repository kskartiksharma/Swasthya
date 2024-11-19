import React, { useEffect } from 'react'
import { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';

function MedicationForm() {
    const [username, setUsername] = useState("");
    const [medication, setMedication] = useState("");
    const [dosage, setDosage] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [medicationList, setMedicationList] = useState([]);
    const location = useLocation();
    const userInfo = location.state.userInfo;

    useEffect(() => {
        setUsername(userInfo.fname);
        setEmail(userInfo.email);

        
    }, [userInfo]);

    const handleList = async (event) => {
        event.preventDefault();
        setMedicationList((prevState) => [...prevState, medication]);
        setMedication("");
        setDosage("");
    };


    const handleSubmit = async (event) => {
        event.preventDefault();


      

        const res = await fetch("http://localhost:5000/medication-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, medicationList , dosage, date, email }),
        });

        if (res.ok) {
            alert("Medication form data saved successfully");
            setMedicationList([]);
            setMedication("");
            setDosage("");
            setDate("");
            window.location.href = "./";
        } else {
            alert("Error saving medication form data");
        }
    };

    const [pdf, setPdf] = useState(null);
      
        const handlePdfChange = (event) => {
          setPdf(event.target.files[0]);
        };
      
        // const handlePdfSubmit = (event) => {
        //   event.preventDefault();
        //   // Do something with the PDF file
        // };

    return (
        <div className='auth-wrapper' style={{marginTop:"100px"}}>
            <h1 style={{textAlign: 'center'}}>Medication Form</h1>
            <Form onSubmit={handleSubmit} className="card border border-3 mx-auto mt-5 w-50 bg-light">
                <Form.Group className=" p-2 " >
                    <Form.Label>
                        Username:
                        <label>{userInfo.fname}</label>
                    </Form.Label>
                    <Form.Label className='ps-lg-5'>
                        Email:
                        <label>{userInfo.email}</label>
                    </Form.Label>
                    <Form.Label className='ps-lg-5'>
                        Dr Name:
                        <label>RN Sharma</label>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mx-auto p-2" >
                    <Form.Label>
                        Medication:
                        <textarea
                            type="text"
                            value={medication}
                            onChange={(e) => setMedication(e.target.value)}
                            className="form-control"
                        
                        />
                        <button onClick={handleList}>Add</button>
                        <ul>
                            {medicationList.map((medication, index) => (
                                <li key={index}>{medication}</li>
                            ))}
                        </ul>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mx-auto p-2" >
                    <Form.Label>
                        Days:
                        <input
                            type="text"
                            value={dosage}
                            onChange={(e) => setDosage(e.target.value)}
                            className="form-control"
                            required
                        />
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mx-auto p-2" >
                    <Form.Label>
                        Date:
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="form-control"
                            required
                        />
                    </Form.Label>
                </Form.Group>
                
                {/* <Form.Group className='mx-auto p-2'>
                <label>
                Upload PDF:
                <input type="file" accept=".pdf" onChange={handlePdfChange} />
                </label>
                <br />
                {/* <button type="submit" onClick={handlePdfSubmit}>Submit</button> */}
                {/* </Form.Group> */} 
                <Form.Group className="mx-auto p-2" >
                    <button type="submit" className='my-num'>Submit</button>
                </Form.Group>
                
            </Form>
        </div >
    );
}


export default MedicationForm;