import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import DropDownColorMenu from './DropDownColorMenu';

let styles = {
  itemDiscriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItem: 'center'
  },
  inputQuality: {
    display: 'flex',
    textAlign: 'center',
    height: 30,
    width: 30,

  },
  cartBtn: {
    height: 50,
    width: 100,
    marginTop: 30
  },
  btnContainers: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}

const ItemDiscDisplay = ({ items }) => {
  console.log(items.menu[0].color)
  let [quantity, setQuantity] = useState(1)



  return (
    <div style={styles.itemDiscriptionContainer}>
      <div style={styles.textContainer}>
      <h1>{items.title}</h1>
      <p>{items.price.toFixed(2)}</p>

      {/* { items.menu.map(color => {
        return <h4>{color}</h4>
      })
      } */}
      <p><span style={{fontWeight: 'bold'}}>Fit</span> True to size.</p>
      </div>
      <div style={styles.btnContainers}>
      <DropDownMenu />
      <DropDownColorMenu />
      <input style={styles.inputQuality} type='number' maxLength='2' max='99' min='1' required value={quantity} />
      <button style={styles.cartBtn}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemDiscDisplay;