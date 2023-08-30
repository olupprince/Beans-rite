import React, { useState } from "react";
import { useCart } from "../Hooks/useCart";

function BensCard({ menu }) {
  // const [quantityOrdered, setQuantityOrdered] = useState(0);
  const { addToCart, removeFromCart } = useCart();
  const [selectiedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectiedId ? id : null);

    if (menu.id === selectiedId) {
      removeFromCart(menu._id);
    } else {
      addToCart(menu);
    }

    // function handleCountUp() {
    //   setQuantityOrdered(quantityOrdered + 1);
    //   addToCart(menu, quantityOrdered + 1);
    // }

    // function handleCountDown() {
    //   if (quantityOrdered >= 1) {
    //     setQuantityOrdered(quantityOrdered - 1);
    //     removeFromCart(menu._id);
    //   }
  }

  return (
    <div className="overall">
      <div className="content-box">
        <img
          className="img"
          src={`http://localhost:5000/${menu.foodImg}`}
          alt="beans img"
        />
        <div className="description">
          <strong className="dish-name">{menu.food}</strong>
          <p className="dish-description"> {menu.ingredients}</p>
          <div>
            <span className="description-status">
              Available {menu.available}{" "}
            </span>
            <span> &bull;</span>
            <span className="description-status"> sold {menu.sold}</span>
          </div>
        </div>
      </div>
      <div className="click-order">
        <span className={selectiedId === menu.id ? "color-red" : "price"}>
          <sup className={selectiedId === menu.id && "color-red"}>&#8358;</sup>
          {menu.price}
        </span>
        <button
          className={selectiedId === menu.id ? "menu-btn bg-red" : "menu-btn"}
          onClick={() => handleClick(menu.id)}
        >
          {menu.id === selectiedId ? menu.addedToCart : menu.cart}
        </button>
      </div>
    </div>
  );
}

export default BensCard;

// import React, { useState } from "react";
// import Cartmenu from "./Cartmenu";

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

//   const [menus, setMenus] = useState([]);

//   function handleAddToCart() {
//     const item = { ...menu, quantityOrdered };
//     setMenus([...menus, item]);
//     console.log(menus);
//     <Cartmenu menu={menus} />;
//     // addToCart(item);
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
//         <button className="btn btn-effect" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//         {/* <Cartmenu menu={menus} /> */}
//       </div>
//     </div>
//   );
// }

// export default BensCard;
