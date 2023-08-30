import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartDev } from "../src/pages/CartContext";
// import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Hooks/useCart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartDev>
      <App />
    </CartDev>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
