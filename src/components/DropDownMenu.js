import React, { useEffect, useState } from "react";
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
    border: '1px solid black',
    background: 'white',
    color: 'black'
  },
  sizeChoices: {
    height: 50,
    width: '100%',
    background: "white"
  },
  sizeTextContent: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid grey"
  }
};

const DropDownMenu = () => {
  let [open, setOpen] = useState(false);
  let [size, setSize] = useState("Size");
  let sizeRef = React.createRef();

  // useEffect(() => {
  //   document.addEventListener("click", handleClose);
  //   return () => {
  //     document.removeEventListener("click", handleClose);
  //   };
  // }, []);

  let handleOpen = event => {
    event.preventDefault();
    console.log("opening", !open);

    setOpen(!open);
  };

  let handleClose = event => {
    console.log("closing", open);
    setOpen(false);
  };

  let onSelectSize = event => {
    event.preventDefault();
    setSize(event.target.innerHTML);
    setOpen(false);
  };

  return (
    <div onMouseLeave={handleClose} style={styles.sizeContainer}>
      <button style={styles.sizeBtn} onClick={handleOpen}>
        {size} {ChevronDown}
      </button>
      {open ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={styles.sizeTextContent}>Please select a size</h5>
          <button onClick={onSelectSize} style={styles.sizeChoices}>
            S
          </button>
          <button onClick={onSelectSize} style={styles.sizeChoices}>
            M
          </button>
          <button onClick={onSelectSize} style={styles.sizeChoices}>
            L
          </button>
          <button onClick={onSelectSize} style={styles.sizeChoices}>
            XL
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DropDownMenu;
