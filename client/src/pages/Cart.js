import React from "react";
import { useCart } from "./CartContext";
import "../styles/prince.css";

function Cart() {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div className="containerp">
      <div>
        <h2 className="h2p">Cart</h2>
        {cartItems.map((item) => (
          <div className="allItems" key={item._id}>
            <p>{item.food}</p>
            <p>Quantity: {item.quantityOrdered}</p>
            <p>&#8358;{item.price}</p>
          </div>
        ))}
        <button className="btn22">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Cart;
