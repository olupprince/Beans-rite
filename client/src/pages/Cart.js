// import React from "react";
import React, { useState } from "react";
import "../styles/prince.css";
import img1 from "../img/beans-img.jpg";
import img2 from "../img/beans-img1.jpg";
import img3 from "../img/beans-img8.jpg";

// function Cart() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   function handleClick(item, action) {
//     if (item === "item1") {
//       if (action === "increase") {
//         setCount1(count1 + 1);
//       } else if (action === "decrease" && count1 > 0) {
//         setCount1(count1 - 1);
//       }
//     } else if (item === "item2") {
//       if (action === "increase") {
//         setCount2(count2 + 1);
//       } else if (action === "decrease" && count2 > 0) {
//         setCount2(count2 - 1);
//       }
//     } else if (item === "item3") {
//       if (action === "increase") {
//         setCount3(count3 + 1);
//       } else if (action === "decrease" && count3 > 0) {
//         setCount3(count3 - 1);
//       }
//     }
//   }

//   return (
//     <div className="containerp">
//       <h4>Bill Details</h4>
//       <form>
//         <input type="text" placeholder="Customer Name" />
//       </form>
//       <hr className="hrp" />
//       <div className="contp">
//         <p className="orderp">Order Details </p>
//         <div>
//           <p className="contpp">
//             <img className="imgp" src={img1} />
//             <h6 className="delicacyp">
//               Aganyin Beans & Sauce
//               <p className="objectp">
//                 <button
//                   className="minusp"
//                   onClick={() => handleClick("item1", "decrease")}
//                 >
//                   -
//                 </button>{" "}
//                 <span className="twop">{count1}</span>
//                 <button
//                   className="plusp"
//                   onClick={() => handleClick("item1", "increase")}
//                 >
//                   +
//                 </button>{" "}
//                 <span className="valuep">$36.00</span>{" "}
//               </p>
//             </h6>
//           </p>
//           <hr className="hrp" />
//         </div>
//         <div>
//           <p className="contpp">
//             <img className="imgp" src={img2} />
//             <h6 className="delicacyp">
//               Plantain
//               <p className="objectp">
//                 <button
//                   className="minusp"
//                   onClick={() => handleClick("item2", "decrease")}
//                 >
//                   -
//                 </button>{" "}
//                 <span className="twop">{count2}</span>
//                 <button
//                   className="plusp"
//                   onClick={() => handleClick("item2", "increase")}
//                 >
//                   +
//                 </button>{" "}
//                 <span className="valuep">$36.00</span>{" "}
//               </p>
//             </h6>
//           </p>
//           <hr className="hrp" />
//         </div>
//         <div>
//           <p className="contpp">
//             <img className="imgp" src={img3} />
//             <h6 className="delicacyp">
//               Item 3
//               <p className="objectp">
//                 <button
//                   className="minusp"
//                   onClick={() => handleClick("item3", "decrease")}
//                 >
//                   -
//                 </button>{" "}
//                 <span className="twop">{count3}</span>
//                 <button
//                   className="plusp"
//                   onClick={() => handleClick("item3", "increase")}
//                 >
//                   +
//                 </button>{" "}
//                 <span className="valuep">$36.00</span>{" "}
//               </p>
//             </h6>
//           </p>
//           <hr className="hrp" />
//         </div>
//       </div>
//       <div className="order-summary">
//         <h4>Order Summary</h4>
//         <div className="borderp amountpp">
//           <p>Subtotal: </p>
//           <p className="loadp">${count1 * 36 + count2 * 36 + count3 * 36}</p>
//         </div>
//         <button className="btn22">Submit Order</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;

// import React, { useState } from "react";
// import "../styles/prince.css";
// import img1 from "../img/beans-img.jpg";
// import img2 from "../img/beans-img1.jpg";
// import img3 from "../img/beans-img8.jpg";

// function Cart() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   function handleClick(item, action) {
//     if (item === "item1") {
//       if (action === "increase") {
//         setCount1(count1 + 1);
//       } else if (action === "decrease" && count1 > 0) {
//         setCount1(count1 - 1);
//       }
//     } else if (item === "item2") {
//       if (action === "increase") {
//         setCount2(count2 + 1);
//       } else if (action === "decrease" && count2 > 0) {
//         setCount2(count2 - 1);
//       }
//     } else if (item === "item3") {
//       if (action === "increase") {
//         setCount3(count3 + 1);
//       } else if (action === "decrease" && count3 > 0) {
//         setCount3(count3 - 1);
//       }
//     }
//   }

//   return (
//     <div className="containerp">
//       <h4>Bill Details</h4>
//       <form>
//         <input type="text" placeholder="Customer Name" />
//       </form>
//       <hr className="hrp" />
//       <div className="contp">
//         <p className="orderp">Order Details </p>
//         {count1 >= 0 && (
//           <div>
//             <p className="contpp">
//               <img className="imgp" src={img1} />
//               <h6 className="delicacyp">
//                 Aganyin Beans & Sauce
//                 <p className="objectp">
//                   <button
//                     className="minusp"
//                     onClick={() => handleClick("item1", "decrease")}
//                   >
//                     -
//                   </button>{" "}
//                   <span className="twop">{count1}</span>
//                   <button
//                     className="plusp"
//                     onClick={() => handleClick("item1", "increase")}
//                   >
//                     +
//                   </button>{" "}
//                   <span className="valuep">$36.00</span>{" "}
//                 </p>
//               </h6>
//             </p>
//             <hr className="hrp" />
//           </div>
//         )}
//         {count2 > 0 && (
//           <div>
//             <p className="contpp">
//               <img className="imgp" src={img2} />
//               <h6 className="delicacyp">
//                 Plantain
//                 <p className="objectp">
//                   <button
//                     className="minusp"
//                     onClick={() => handleClick("item2", "decrease")}
//                   >
//                     -
//                   </button>{" "}
//                   <span className="twop">{count2}</span>
//                   <button
//                     className="plusp"
//                     onClick={() => handleClick("item2", "increase")}
//                   >
//                     +
//                   </button>{" "}
//                   <span className="valuep">$36.00</span>{" "}
//                 </p>
//               </h6>
//             </p>
//             <hr className="hrp" />
//           </div>
//         )}
//         {count3 > 0 && (
//           <div>
//             <p className="contpp">
//               <img className="imgp" src={img3} />
//               <h6 className="delicacyp">
//                 Item 3
//                 <p className="objectp">
//                   <button
//                     className="minusp"
//                     onClick={() => handleClick("item3", "decrease")}
//                   >
//                     -
//                   </button>{" "}
//                   <span className="twop">{count3}</span>
//                   <button
//                     className="plusp"
//                     onClick={() => handleClick("item3", "increase")}
//                   >
//                     +
//                   </button>{" "}
//                   <span className="valuep">$36.00</span>{" "}
//                 </p>
//               </h6>
//             </p>
//             <hr className="hrp" />
//           </div>
//         )}
//       </div>
//       {count1 > 0 || count2 > 0 || count3 > 0 ? (
//         <div className="order-summary">
//           <h4>Order Summary</h4>
//           <div className="borderp amountpp">
//             <p>Subtotal: </p>
//             <p className="loadp">${count1 * 36 + count2 * 36 + count3 * 36}</p>
//           </div>
//           <button className="btn22">Submit Order</button>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default Cart;

function Cart() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  function handleClick(item, action) {
    if (item === "item1") {
      if (action === "increase") {
        setCount1(count1 + 1);
      } else if (action === "decrease" && count1 > 0) {
        setCount1(count1 - 1);
      }
    } else if (item === "item2") {
      if (action === "increase") {
        setCount2(count2 + 1);
      } else if (action === "decrease" && count2 > 0) {
        setCount2(count2 - 1);
      }
    } else if (item === "item3") {
      if (action === "increase") {
        setCount3(count3 + 1);
      } else if (action === "decrease" && count3 > 0) {
        setCount3(count3 - 1);
      }
    }
  }

  return (
    <div className="overall">
      <div className="containerp">
        <h4>Bill Details</h4>
        <form>
          <input type="text" placeholder="Customer Name" />
        </form>
        <hr className="hrp" />
        <div className="contp">
          <p className="orderp">Order Details </p>
          {count1 >= 0 && (
            <div>
              <p className="contpp">
                <img className="imgp" src={img1} />
                <h6 className="delicacyp">
                  Aganyin Beans & Sauce
                  <p className="objectp">
                    <button
                      className="minusp"
                      onClick={() => handleClick("item1", "decrease")}
                    >
                      -
                    </button>{" "}
                    <span className="twop">{count1}</span>
                    <button
                      className="plusp"
                      onClick={() => handleClick("item1", "increase")}
                    >
                      +
                    </button>{" "}
                    <span className="valuep">${count1 * 36}.00</span>{" "}
                  </p>
                </h6>
              </p>
              <hr className="hrp" />
            </div>
          )}
          {count2 >= 0 && (
            <div>
              <p className="contpp">
                <img className="imgp" src={img2} />
                <h6 className="delicacyp">
                  Plantain
                  <p className="objectp">
                    <button
                      className="minusp"
                      onClick={() => handleClick("item2", "decrease")}
                    >
                      -
                    </button>{" "}
                    <span className="twop">{count2}</span>
                    <button
                      className="plusp"
                      onClick={() => handleClick("item2", "increase")}
                    >
                      +
                    </button>{" "}
                    <span className="valuep">${count2 * 36}.00</span>{" "}
                  </p>
                </h6>
              </p>
              <hr className="hrp" />
            </div>
          )}
          {count3 >= 0 && (
            <div>
              <p className="contpp">
                <img className="imgp" src={img3} />
                <h6 className="delicacyp">
                  Item 3
                  <p className="objectp">
                    <button
                      className="minusp"
                      onClick={() => handleClick("item3", "decrease")}
                    >
                      -
                    </button>{" "}
                    <span className="twop">{count3}</span>
                    <button
                      className="plusp"
                      onClick={() => handleClick("item3", "increase")}
                    >
                      +
                    </button>{" "}
                    <span className="valuep">${count3 * 36}.00</span>{" "}
                  </p>
                </h6>
              </p>
              <hr className="hrp" />
            </div>
          )}
        </div>
        {count1 > 0 || count2 > 0 || count3 > 0 ? (
          <div className="order-summary">
            <h4>Order Summary</h4>
            <div className="borderp amountpp">
              <p>Subtotal: </p>
              <p className="loadp">
                ${count1 * 36 + count2 * 36 + count3 * 36}
              </p>
            </div>
            <button className="btn22">Proceed to Payment</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;

// import React from "react";
// import Cart from "./Cart";

// function ShoppingCart(prop) {
//   return (
//     <div>
//       <h2>Cart</h2>
//       {prop.cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           {prop.cartItems.map((item) => (
//             <div key={item.id}>
//               <p>{item.food}</p>
//               <p>Quantity: {item.quantityOrdered}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {/* <Cart /> */}
//     </div>
//   );
// }

// export default ShoppingCart;
