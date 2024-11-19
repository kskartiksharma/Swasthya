import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../portal/Components/Footer';
export default function MedicationSearch() {
    const [email, setEmail] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if()
    // },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setUserInfo(null);
        

        try {
            const response = await fetch(`http://localhost:5000/test/MedicationInfo/${email}`);
            const data = await response.json();
            if (Array.isArray(data) && data.length === 0) {
                window.alert('USER NOT FOUND');
            } else {
                setUserInfo(data);
                navigate('/medi-info', { state: { userInfo: data } });
            }
        } catch (error) {
            setError(error.message);
        } 
    };

    return (
        <>
        <div className = "row justify-content-center" style={{margin:"140px 0px 0px 0px"}} >
           <div className='col-lg-4 col-md-12 col-sm-12 m-0'>
           <div className="my-card">
                <form onSubmit={handleSubmit}>
                    <h3>Fetch Details</h3>
                    <div className="mb-3">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter email"/>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="my-num">
                            Search
                        </button>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="my-num my-2">
                            Scan Qr Code
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>
           </div>
        </div>

        <Footer/>
        </>
    );
}
