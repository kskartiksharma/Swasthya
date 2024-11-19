import React, { useState, useEffect } from 'react';
import Footer from '../portal/Components/Footer';

export default function ApproveAppointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch all appointments that have not yet been approved
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://localhost:5000/appointments?isApproved=false');

                if (response.ok) {
                    const data = await response.json();
                    setAppointments(data);
                    console.log(data);
                } else {
                    alert('Error fetching appointments!');
                }
            } catch (err) {
                console.log(err);
                alert('Error fetching appointments!');
            }
        };

        fetchAppointments();
    }, []);

    const handleApproveAppointment = async (id) => {
        console.log(id);
        try {
            // Send a PATCH request to update the appointment's isApproved field to true
            const response = await fetch(`http://localhost:5000/appointment/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isApproved: true }),
            });

            if (response.ok) {
                alert('Appointment approved!');
                // Remove the approved appointment from the list of pending appointments
                setAppointments(appointments.filter((appointment) => appointment._id !== id));
            } else {
                alert('Error approving appointment!');
            }
        } catch (err) {
            console.log(err);
            alert('Error approving appointment!');
        }
    };

    return (
        <>
            <div style={{marginTop:"100px",height:"600px"}}>
            <h2>Pending Appointments</h2>
            {appointments.length > 0 ? (
                <ul>
                    {appointments.map((appointment) => (
                        <li key={appointment._id}>
                            {appointment.name} - {appointment.date} with {appointment.doctor}{' '}
                            <button onClick={() => handleApproveAppointment(appointment._id)} className='my-num'>Approve</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No pending appointments.</p>
            )}
        </div>
        <Footer/>
        </>
    );
}