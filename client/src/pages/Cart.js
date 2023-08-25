import React from "react";
import { useCart } from "./CartContext";
import "../styles/prince.css";

function Cart() {
  const { cartItems } = useCart();
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantityOrdered;
  }, 0);
  return (
    <div className="containerp">
      <div>
        <h2 className="h2p">Cart</h2>
        <p className="bill">Bill Details</p>
        <hr className="hrp" />
        {cartItems.map((item) => (
          <div className="allItems" key={item._id}>
            <img
              className="imgpp"
              src={`http://localhost:5000/${item.foodImg}`}
              alt="beans img"
            />
            <p>{item.food}</p>
            <p>Quantity: {item.quantityOrdered}</p>
            <p>&#8358;{item.price}</p>
          </div>
        ))}
        <div className="cartTotal totalCart">
          <p>Total :</p>
          <p> &#8358;{totalAmount}</p>
        </div>
        <button className="btn22">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Cart;
