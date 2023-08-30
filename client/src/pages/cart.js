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
import "../styles/cart.css";
import { useCart } from "../Hooks/useCart";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Price from "../components/price";

function CartItem({ item }) {
  const { changeQuantity, removeFromCart } = useCart();
  return (
    <li key={item.food._id} className="cart-item">
      <div className="cart-item-image">
        <img
          src={`http://localhost:5000/${item.food.foodImg}`}
          alt={item.food.food}
          className="picc"
        />
      </div>
      <div className="cart-item-name">
        <Link to={""}>{item.food.food}</Link>
      </div>
      <div className="cart-item-quantity">
        <select
          value={item.quantity}
          onChange={(e) =>
            changeQuantity(item.food._id, Number(e.target.value))
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <div className="cart-item-price">
        <Price price={item.price} />
      </div>

      <div className="cart-item-remove">
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.food._id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

function Cart() {
  const { cart } = useCart();
  let totalAmount= 1000;

  return (
    <div>
      <div className="cart-all">
        {cart && cart.items.length > 0 && (
          <div className="cart-container">
            <Title title="Cart" />
            <ul className="cart-items">
              {cart.items.map((item) => (
                <CartItem item={item} key={item.food._id} />
              ))}
            </ul>
            <div className="cart-total">
              <div className="cart-total-count">{cart.totalCount}</div>
              <div className="cart-total-price">
                <Price price={cart.totalPrice} />
              </div>
            </div>
              <Link to={{
              pathname: '/payment',
              state: { totalAmount },
              }}> Proceed To Checkout </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
