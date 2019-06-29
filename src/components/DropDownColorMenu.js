import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
const ChevronDown = <FontAwesomeIcon icon={faSortDown} />;

let styles = {
  colorContainer: {
    margin: "20px 0",
    marginRight: 10
  },
  colorBtn: {
    height: 50,
    width: "100%",
    fontSize: 25,
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    border: "1px solid black",
    background: "white",
    color: "black"
  },
  colorChoise: {
    height: 50,
    width: "100%"
  },
  colorTextContent: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid grey"
  },
  colorSelect: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "50px",
    fontSize: "20px",
    padding: "0px 15px"
  }
};

const DropDownColorMenu = ({ handleColor, menu, setCurrentId }) => {
  let [open, setOpen] = useState(false);
  let [color, setColor] = useState("Color");
  let colorRef = useRef(null);

  let handleOpen = event => {
    event.preventDefault();

    setOpen(!open);
  };

  let handleClose = event => {
    setOpen(!open);
  };

  let onSelectSize = (event, color, id) => {
    event.preventDefault();
    setColor(color);
    setCurrentId(id);
    handleColor(color);
    setOpen(false);
  };

  return (
    <div onMouseLeave={handleClose} style={styles.colorContainer}>
      <button style={styles.colorBtn} onClick={handleOpen}>
        {color} {ChevronDown}
      </button>
      {open ? (
        <div
          style={{ display: "flex", flexDirection: "column", height: "160px" }}
        >
          <h5 style={styles.colorTextContent}>Please select a color</h5>
          <button className="colorChoise">
            {menu.map(item => {
              return (
                <button
                  key={item.color}
                  onClick={e => onSelectSize(e, item.color, item._id)}
                  style={styles.colorSelect}
                >
                  <img src={item.button} alt="" />
                  <span ref={colorRef}>{item.color}</span>
                </button>
              );
            })}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DropDownColorMenu;
