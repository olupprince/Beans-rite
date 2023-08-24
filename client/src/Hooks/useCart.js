import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext(null);


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const calculateTotal = (items) => {
    const totalCount = items.reduce((total, item) => total + item.quantity, 0);
    setTotalCount(totalCount);
    const totalPrice = items.reduce((total, item) => {
      const updatedPrice = item.quantity * item.price;
      return total + updatedPrice;
    }, 0);
  
    return setTotalPrice(totalPrice)
  };

  const addToCart = (food) => {
    const existingItem = cartItems.find((item) => item.food._id === food.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.food._id === food.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } else {
      setCartItems([...cartItems, { food, price: food.price, quantity: 1 }]);
      calculateTotal([...cartItems, { food, price: food.price, quantity: 1 }]);
    }
  };
  console.log(cartItems[0])
  const removeFromCart = (foodId) => {
    const updatedCart = cartItems.filter((item) => item.food._id !== foodId);
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
  };

  const changeQuantity = (foodId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.food._id === foodId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    // Update the item.price and cart.totalPrice properties
    const updatedItem = updatedCart.find((item) => item.food._id === foodId);
    updatedItem.price = newQuantity * updatedItem.food.price;
  };

  // Fetch data from the API and set the cartItems state when data is fetched
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/api/menu");
        const menuItems = response.data.menuItems;

        const initialCartItems = menuItems.slice(1, 4).map((food) => ({
          food,
          price: food.price,
          quantity: 1
        }));

        setCartItems(initialCartItems);
        calculateTotal(initialCartItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalPrice, totalCount },
        changeQuantity,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
