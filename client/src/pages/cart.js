// import React from "react";
// import { useCart } from "./CartContext";
// import "../styles/prince.css";

// function Cart() {
//   const { cartItems } = useCart();
//   const totalAmount = cartItems.reduce((total, item) => {
//     return total + item.price * item.quantityOrdered;
//   }, 0);
//   return (
//     <div className="containerp">
//       <div>
//         <h2 className="h2p">Cart</h2>
//         <p className="bill">Bill Details</p>
//         <hr className="hrp" />6
//         {cartItems.map((item) => (
//           <div className="allItems" key={item._id}>
//             <img
//               className="imgpp"
//               src={`http://localhost:5000/${item.foodImg}`}
//               alt="beans img"
//             />
//             <p>{item.food}</p>
//             <p>Quantity: {item.quantityOrdered}</p>
//             <p>&#8358;{item.price}</p>
//             <hr className="hrp" />6
//           </div>
//         ))}
//         <div className="cartTotal totalCart">
//           <p>Total :</p>
//           <p> &#8358;{totalAmount}</p>
//         </div>
//         <button className="btn22">Proceed to Payment</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import React from "react";
import { useCart } from "../Hooks/useCart";
import "../styles/prince.css";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantityOrdered;
  }, 0);

  function handleCountUp(item) {
    const newQuantity = item.quantityOrdered + 1;
    const newCartItem = { ...item, quantityOrdered: newQuantity };
    addToCart(newCartItem);
  }

  function handleCountDown(item) {
    if (item.quantityOrdered > 1) {
      const newQuantity = item.quantityOrdered - 1;
      const newCartItem = { ...item, quantityOrdered: newQuantity };
      addToCart(newCartItem);
    } else {
      removeFromCart(item);
    }
  }

  return (
    <div className="containerp">
      <div>
        <h2 className="h2p">Cart</h2>
        <p className="bill">Bill Details</p>
        {cartItems.map((item) => (
          <div key={item._id}>
            <div className="allItems">
              <img
                className="imgpp"
                src={`http://localhost:5000/${item.foodImg}`}
                alt="beans img"
              />
              <p>{item.food}</p>
              <div className="quantity">
                <button
                  className="btn btn-effect"
                  onClick={() => handleCountDown(item)}
                >
                  -
                </button>
                <span>{item.quantityOrdered}</span>
                <button
                  className="btn btn-effect"
                  onClick={() => handleCountUp(item)}
                >
                  +
                </button>
              </div>
              <p>&#8358;{item.price}</p>
            </div>
            <hr className="hrp" />
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
