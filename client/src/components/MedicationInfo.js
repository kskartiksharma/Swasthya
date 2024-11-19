import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MedicationInfo() {
    const location = useLocation();
    const userInfo = location.state.userInfo;

    return (
        <div style={{marginTop:"100px"}}>
            <table className='table table-hover align-middle mt-5 container'>
                <thead>
                    <tr className='text-center'>
                        <th style={{ width: '10%' }}>Email</th>
                        <th style={{ width: '30%' }}>Medication</th>
                        <th style={{width : "10%"}}>Days</th>
                        <th style={{ width: '20%' }}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map((medication) => (
                        <tr key={medication._id} className='text-center'>
                            <td>{medication.email}</td>
                            <td>
                                <ul>
                                    {medication.medication.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{medication.dosage}</td>
                            <td>{medication.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}