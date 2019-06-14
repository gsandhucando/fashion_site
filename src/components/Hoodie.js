import React, { useState } from "react";

const Hoodie = ({ title, price, menu }) => {
  let [hoodieChange, setHoodieChange] = useState(menu[0].img);
  return (
    <div className="item-container">
      <div className="men-items">
        <img className="shirt-imgs" src={hoodieChange} alt="" />
      </div>
      <div>
        {menu.map(item => {
          return (
            <img
              className="shirt-colors"
              key={item.img}
              onMouseOver={() => {
                setHoodieChange(item.img);
              }}
              src={item.button}
              alt=""
            />
          );
        })}
        <div>
          <p styple={{ fontSize: 36 }}>
            <span>{title}</span>
          </p>
          <p styple={{ fontSize: 32 }}>
            <span style={{ fontWeight: "700" }}>${price.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hoodie;