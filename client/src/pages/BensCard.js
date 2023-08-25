import React, { useState } from "react";

function BensCard({ menu }) {
  const [selectiedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectiedId ? id : null);
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
