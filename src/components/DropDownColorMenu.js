import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
const ChevronDown = <FontAwesomeIcon icon={faSortDown} />

let styles = {
  colorContainer: {
    margin: '20px 0'
  },
  colorBtn: {
    height: 50,
    width: 150,
    fontSize: 25,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10
  },
  colorChoise: {
    height: 50,
    width: 150
  },
  colorTextContent: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid grey'
  }
}

const DropDownColorMenu = () => {
  let [open, setOpen] = useState(false)
  let [color, setColor] = useState('Color')
  let sizeRef = React.createRef();

  let handleOpen = (event) => {
    event.preventDefault();


    setOpen(!open)
    document.addEventListener("click", handleClose);
  }

  let handleClose = (event) => {
    setOpen(false)
    // if (!sizeMenu.contains(event.target)) {
    document.removeEventListener("click", handleClose);
    // }

  }

  let onSelectSize = (event) => {
    event.preventDefault();
    setColor(event.target.innerHTML)
  }


  return (
    <div style={styles.colorContainer}>
      <button style={styles.colorBtn} onClick={handleOpen}>
        {color} {ChevronDown}
      </button>
      {
        open
        ? (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h5 style={styles.colorTextContent}>Please select a color</h5>
            <button onClick={onSelectSize} style={styles.colorChoise}>S</button>
          </div>
        )
        : (
          null
        )
      }
    </div>
  )
}

export default DropDownColorMenu;