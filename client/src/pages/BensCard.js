// function BensCard({ menu }) {
//   const [quantityOrdered, setQuantityOrdered] = useState(0);

//   function handleCountUp() {
//     setQuantityOrdered(quantityOrdered + 1);
//   }

//   function handleCountDown() {
//     if (quantityOrdered >= 1) {
//       setQuantityOrdered(quantityOrdered - 1);
//     }
//   }

//   return (
//     <div className="overall">
//       <div className="content-box">
//         <img
//           className="img"
//           src={`http://localhost:5000/${menu.foodImg}`}
//           alt="beans img"
//           onClick={handleCountUp}
//         />
//         <div className="description">
//           <strong className="dish-name">{menu.food}</strong>
//           <p className="dish-description"> {menu.ingredients}</p>
//           <div>
//             <span>Available {menu.available} </span>
//             <span> &bull;</span>
//             <span> sold {menu.sold}</span>
//           </div>
//         </div>
//       </div>
//       <div className="click-order">
//         <span className="price">
//           {" "}
//           <sup className="naira">&#8358;</sup>
//           {menu.price}
//         </span>
//         <button className="btn btn-effect" onClick={handleCountDown}>
//           -
//         </button>
//         <span className="quantity-ordered">{quantityOrdered}</span>
//         <button className="btn btn-effect" onClick={handleCountUp}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

function BensCard({ menu, addToCart }) {
  const [quantityOrdered, setQuantityOrdered] = useState(0);

  function handleCountUp() {
    setQuantityOrdered(quantityOrdered + 1);
  }

  function handleCountDown() {
    if (quantityOrdered >= 1) {
      setQuantityOrdered(quantityOrdered - 1);
    }
  }

  function handleAddToCart() {
    const item = { ...menu, quantityOrdered };
    addToCart(item);
  }

  return (
    <div className="overall">
      <div className="content-box">
        <img
          className="img"
          src={`http://localhost:5000/${menu.foodImg}`}
          alt="beans img"
          onClick={handleCountUp}
        />
        <div className="description">
          <strong className="dish-name">{menu.food}</strong>
          <p className="dish-description"> {menu.ingredients}</p>
          <div>
            <span>Available {menu.available} </span>
            <span> &bull;</span>
            <span> sold {menu.sold}</span>
          </div>
        </div>
      </div>
      <div className="click-order">
        <span className="price">
          {" "}
          <sup className="naira">&#8358;</sup>
          {menu.price}
        </span>
        <button className="btn btn-effect" onClick={handleCountDown}>
          -
        </button>
        <span className="quantity-ordered">{quantityOrdered}</span>
        <button className="btn btn-effect" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BensCard;
