import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartDev({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  //   const removeFromCart = (item) => {
  //     const newCartItems = cartItems.filter(
  //       (cartItem) => cartItem.id !== item.id
  //     );
  //     setCartItems(newCartItems);
  //   };

  const value = { cartItems, addToCart };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
}
// export default CartDev;
