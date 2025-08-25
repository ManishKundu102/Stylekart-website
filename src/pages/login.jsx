import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phone, setPhone] = useState("");          
  const [method, setMethod] = useState("sms");     
  const [rememberMe, setRememberMe] = useState(false);


  const from = location.state?.from?.pathname || "/shop";

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    
    if (rememberMe) {
      localStorage.setItem("userPhone", phone);
    } else {
      sessionStorage.setItem("userPhone", phone);
    }

    
    alert(`OTP sent via ${method.toUpperCase()} to ${phone}`);


    navigate(from, { replace: true });
  };

  return (
    <div className="login-container">
      <h2>Login with Phone</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Verification Method</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="sms">SMS</option>
          <option value="call">Call</option>
        </select>

        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />{" "}
            Remember Me
          </label>
        </div>

        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};

export default Login;
