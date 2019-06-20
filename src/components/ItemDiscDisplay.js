import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import DropDownColorMenu from "./DropDownColorMenu";

let styles = {
  itemDiscriptionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
    // display: 'grid',
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItem: "center"
  },
  inputQuality: {
    display: "flex",
    textAlign: "center",
    height: 50,
    width: 50,
    marginTop: 90,
    fontSize: "15px"
  },
  cartBtn: {
    display: "flex",
    justifyContent: "center",
    height: 50,
    width: 150,
    marginTop: 10,
    background: "#333333",
    color: "white",
    border: "none",
    fontSize: "20px"
  },
  btnContainers: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

const ItemDiscDisplay = ({ items, id, price, toggleClick }) => {
  let [quantity, setQuantity] = useState(1);


  let filterColor = items.menu.filter(
    img => img._id === id
  );
  let [color, setColor] = useState(filterColor[0].color);

  return (
    <div style={styles.itemDiscriptionContainer}>
      <div style={styles.textContainer}>
        <h1>{items.title}</h1>
        <p style={{ fontSize: "30px" }}>${items.price.toFixed(2)}</p>

        <h4>{color}</h4>

        <p>
          <span style={{ fontWeight: "bold" }}>Fit</span> True to size.
        </p>
      </div>
      <div style={styles.btnContainers}>
        {price > 200 ? null : <DropDownMenu />}
        <DropDownColorMenu handleColor={setColor} menu={items.menu} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            onChange={e => setQuantity(e.target.value)}
            style={styles.inputQuality}
            type="number"
            maxLength="2"
            max="99"
            min="1"
            required
            value={quantity}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={toggleClick} style={styles.cartBtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDiscDisplay;
