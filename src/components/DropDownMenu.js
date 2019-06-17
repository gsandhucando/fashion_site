import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
const ChevronDown = <FontAwesomeIcon icon={faSortDown} />

let styles = {
  sizeContainer: {
    marginTop: 20
  },
  sizeBtn: {
    height: 50,
    width: 150,
    fontSize: 25,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10
  },
  sizeChoices: {
    height: 50,
    width: 150
  },
  sizeTextContent: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid grey'
  }
}

const DropDownMenu = () => {
  let [open, setOpen] = useState(false)
  let [size, setSize] = useState('Size')
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
    setSize(event.target.innerHTML)
  }


  return (
    <div style={styles.sizeContainer}>
      <button style={styles.sizeBtn} onClick={handleOpen}>
        {size} {ChevronDown}
      </button>
      {
        open
        ? (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <h5 style={styles.sizeTextContent}>Please select a size</h5>
            <button onClick={onSelectSize} style={styles.sizeChoices}>S</button>
            <button onClick={onSelectSize} style={styles.sizeChoices}>M</button>
            <button onClick={onSelectSize} style={styles.sizeChoices}>L</button>
            <button onClick={onSelectSize} style={styles.sizeChoices}>XL</button>
          </div>
        )
        : (
          null
        )
      }
    </div>
  )
}

export default DropDownMenu;