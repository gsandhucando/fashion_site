import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Item = ({ title, price, menu, _id }) => {
  let [itemChange, setItemChange] = useState(menu[0].img);
  let [itemId, setItemId] = useState(menu[0]._id)

  return (
    <div className="item-container">
      <div className="men-items">
      <Link to={{pathname:`item/${itemId}`, state:{price, title, _id, menu}}}> <img className="shirt-imgs" src={itemChange} alt="" />
      </Link>
      </div>
      <div>
        {menu.map(item => {
          return (
            <img
              className="shirt-colors"
              key={item.img}
              onMouseOver={() => {
                setItemChange(item.img);
                setItemId(item._id);
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

export default Item;