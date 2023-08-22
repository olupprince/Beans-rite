import React, { useState } from "react";
// import BensCard from "./BensCard";
import ShoppingCart from "./ShoppingCart";

function Cartmenu({ menu }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div>
      {/* {menu.map((item) => (
        <BensCard key={item.id} menu={item} addToCart={addToCart} />
      ))} */}
      <ShoppingCart cartItems={menu} />
    </div>
  );
}

export default Cartmenu;
