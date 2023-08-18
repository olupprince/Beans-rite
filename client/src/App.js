// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Cart from "./Cart.js";
import React, { useState } from "react";
import Homepage from "./Homepage";
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [data, setData] = React.useState(null);
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "" : data}</p>
      </header>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      {/* <Router>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router> */}
      {/* <Homepage /> */}
      <Register />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
