import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../img/login-img.jpg";
import { Link } from 'react-router-dom';
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);

  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    const userData = { username, password, email };
    const passwordPattern = 'Password should be 3 to 30 characters and alphanumeric';


    setValidationError(null);
    setRegistrationError(null); // Reset any previous errors

    if (username.length < 4) {
      setValidationError('Username should be at least 4 characters long');
      return; // Stop further processing if validation fails
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Registration successful! You can now log in.');
        navigate('/login');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        const data = await response.json();
        if (data.error.includes('password')) {
          setValidationError(`${passwordPattern}`);
        } else if (data.error === 'Email is already registered') {
          setRegistrationError('Email is already registered');
        } else {
          setRegistrationError('An error occurred during registration. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationError('An error occurred during registration. Please try again later.');
    }
  }
  return (
    <div className="login-clip">
      <div className="login-flex-box">
        <div className="login-img-box">
          <img src={loginImg} alt="login-img" className="login-img" />
        </div>
        <form className="login-container" onSubmit={register}>
          <h2 className="log">Sign-up</h2>
          <input
            className="input-name"
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="input-email"
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-password"
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        {registrationError && <span className="error">{registrationError}</span>}
        {validationError && <span className="error">{validationError}</span>}
        <button className="btnReg">Register</button>
        <p className="register-link">
        Already have an account? <Link to="/login">Click to login</Link>.
        </p>
      </form>
      </div>
    </div>

  );
}

export default RegisterPage;
