import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
const ChevronDown = <FontAwesomeIcon icon={faSortDown} />;

let styles = {
  sizeContainer: {
    marginTop: 20,
    marginRight: 10,
    background: "white"
  },
  sizeBtn: {
    height: 50,
    width: "100%",
    fontSize: 25,
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    marginRight: 40,
    border: "1px solid black",
    background: "white",
    color: "black"
  },
  sizeTextContent: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid grey"
  }
};

const DropDownMenu = ({ setCurrentSize, items }) => {
  let [open, setOpen] = useState(false);
  let [size, setSize] = useState("Size");

  let handleOpen = event => {
    event.preventDefault();

    setOpen(!open);
  };

  let handleClose = event => {
    setOpen(!open);
  };

  let onSelectSize = event => {
    event.preventDefault();
    setCurrentSize(event.target.innerHTML);
    setSize(event.target.innerHTML);
    setOpen(false);
  };

  console.log(items)
  return (
    <>
    {items.price < 200 ?
    <div onClick={handleClose} style={styles.sizeContainer}>
      <div style={styles.sizeBtn} onClick={handleOpen}>
        {size} {ChevronDown}
      </div>
      {open ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={styles.sizeTextContent}>Please select a size</h5>
          <div className='sizeChoices' onClick={onSelectSize}>
            S
          </div>
          <div className='sizeChoices' onClick={onSelectSize}>
            M
          </div>
          <div className='sizeChoices' onClick={onSelectSize}>
            L
          </div>
          <div className='sizeChoices' onClick={onSelectSize}>
            XL
          </div>
        </div>
      ) : null}
    </div>
    : null }
    </>
  );
};

export default DropDownMenu;
