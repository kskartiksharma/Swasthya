import React, { useState, useEffect } from 'react';

export default function Appointment() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const [appointmentId, setAppointmentId] = useState('');
    const [savedData, setSavedData] = useState({});

    useEffect(() => {
        // Retrieve data from local storage
        const Data = localStorage.getItem("userData");
        if (Data) {
            setSavedData(JSON.parse(Data));
            setName(JSON.parse(Data).fname);
            setEmail(JSON.parse(Data).email);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a new appointment object with the form data
        const newAppointment = {
            name,
            email,
            date,
            time,
            doctor,
            isApproved: false, // Initialize the approval field to false
        };

        try {
            // Send a POST request to the backend to create the new appointment
            const response = await fetch('http://localhost:5000/bookappointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAppointment),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Appointment created!');
                setDate('');
                setTime('');
                setDoctor('');
                if (data) {
                    setAppointmentId(data.id); // Save the ID of the created appointment
                }
                window.location.href = "./";
            } else {
                alert('Error creating appointment!');
            }
        } catch (err) {
            console.log(err);
            alert('Error creating appointment!');
        }
    };

    const handleFetchData = async () => {
        try {
            // Send a GET request to fetch the appointment data

            const response = await fetch(`http://localhost:5000/appointment/${savedData.email}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                // Check the value of isApproved
                if (data.isApproved) {
                    alert('Your appointment has been approved!');
                } else {
                    alert('Your appointment is still pending approval.');
                }
            } else {
                alert('Error fetching appointment data!');
            }
        } catch (err) {
            console.log(err);
            alert('Error fetching appointment data!');
        }
    };

    return (
        <div className="row justify-content-center" style={{margin:'140px 0px 0px 0px'}}>
            <div className="my-card col-lg-4 col-md-12 col-sm-12 p-4">
                <h3 className='text-center'>
                    Book Appointment
                </h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name: {savedData.fname}

                    </label>
                    <br />
                    <label>
                        Email: {savedData.email}

                    </label>
                    <br />
                    <label>
                        Date:
                        <input type="date" value={date} className='form-control' onChange={(event) => setDate(event.target.value)} required />
                    </label>
                    <br />
                    {/* <label>
                        Time:
                        <input type="time" value={time} className='form-control' onChange={(event) => setTime(event.target.value)} required />
                    </label> */}
                    <br />
                    <label>
                        Doctor:
                        <input type="text" value={doctor} className='form-control'  onChange={(event) => setDoctor(event.target.value)} required pattern="^\S.*"
                            title="Doctor name can not contain only spaces" />
                    </label>
                    <br />
                    <div className='text-center'>
                        <button type="submit" className='my-num mt-2'>Create Appointment</button>
                    </div>
                </form>
            <br />
                <div className='text-center'>
                    <button onClick={handleFetchData} className='my-num'>Check Appointment Status</button>
                </div>
        </div>
        </div>
    );
}