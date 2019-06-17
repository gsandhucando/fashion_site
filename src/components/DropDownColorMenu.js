import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
const ChevronDown = <FontAwesomeIcon icon={faSortDown} />;

let styles = {
  colorContainer: {
    margin: "20px 0"
  },
  colorBtn: {
    height: 50,
    width: 150,
    fontSize: 25,
    display: "flex",
    justifyContent: "space-between",
    padding: 10
  },
  colorChoise: {
    height: 50,
    width: 150
  },
  colorTextContent: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid grey"
  }
};

const DropDownColorMenu = ({handleColor, menu}) => {
  let [open, setOpen] = useState(false);
  let [color, setColor] = useState("Color");
  let colorRef = useRef(null);

  let handleOpen = event => {
    event.preventDefault();

    setOpen(!open);
  };

  let handleClose = event => {
    setOpen(false);
  };

  let onSelectSize = (event, color) => {
    event.preventDefault();
    console.log(event.target.childNodes)
    setColor(color);
    handleColor(color)
    setOpen(false);
  };

  return (
    <div onMouseLeave={handleClose} style={styles.colorContainer}>
      <button style={styles.colorBtn} onClick={handleOpen}>
        {color} {ChevronDown}
      </button>
      {open ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={styles.colorTextContent}>Please select a color</h5>
          <button style={styles.colorChoise}>
           {
             menu.map(item => {
               return <button key={item.color} onClick={(e)=> onSelectSize(e, item.color)} style={{width: '100%', background: 'yellow'}}>
                 <img src={item.button}/>
                 <span ref={colorRef}>{item.color}</span>
               </button>
             })
           }
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DropDownColorMenu;
