import React from "react";
import { useCart } from "./CartContext";
import "../styles/prince.css";

function Cart() {
  const { cartItems } = useCart();
  console.log(cartItems);
  return (
    <div className="containerp">
      <div>
        <h2>Cart</h2>
        {cartItems.map((item) => (
          <div className="allItems" key={item._id}>
            <p>{item.food}</p>
            <p>Quantity: {item.quantityOrdered}</p>
            <p>&#8358;{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
