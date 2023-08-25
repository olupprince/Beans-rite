import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);
  // const history = useHistory(); // Access the history object
  const navigate = useNavigate();
  async function register(e) {
    e.preventDefault();
    const userData = { username, phoneNumber, password, email };

    // If data is valid, proceed with the registration logic
    setValidationError(null);
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // Registration successful, show success message or redirect to another page
        alert("Registration successful! You can now log in.");
        // Optionally, redirect to the login page
        navigate("/login"); // Use navigate to redirect to '/login'
        // Reset the form and clear input fields
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        setValidationError("");
        setRegistrationError("");
      } else {
        // Registration failed, handle error response from the server
        const data = await response.json();
        alert(data.error); // Display the error message sent by the server
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle other errors (e.g., network error)
      setRegistrationError(
        "An error occurred during registration. Please try again later."
      ); // Set the registration error message
    }
  }
  return (
    <form className="login-container" onSubmit={register}>
      <h2 className="log">Register</h2>
      <input
        type="text"
        id="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="phoneNumber"
        id="phoneNumber"
        placeholder="phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <input
        type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {validationError && <span className="error">{validationError}</span>}
      {registrationError && <span className="error">{registrationError}</span>}
      <button className="btnReg">Register</button>
    </form>
  );
}

export default RegisterPage;
