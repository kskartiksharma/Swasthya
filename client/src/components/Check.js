import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../portal/Components/Footer";
export default function Check() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setUserInfo(null);

    try {
      const response = await fetch(
        `http://localhost:5000/test/UserInfo/${email}`
      );
      const data = await response.json();
      setUserInfo(data);
      navigate("/medi-form", { state: { userInfo: data } });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="row justify-content-center" style={{margin:'140px'}}>
        <div className="my-card col-lg-4 col-sm-12 p-4">
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
                placeholder="Enter email"
              />
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
      <Footer/>
    </>
  );
}
