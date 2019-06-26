import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let styles = {
  title: {
    borderBottom: '1px solid black',
    margin: '10px'
  },
  itemContent: {
    borderBottom: '1px solid black',
    margin: '10px'
  },
  checkoutBtn: {
    border: 'none',
    height: '50px',
    width: '120px',
    background: 'black',
    color: 'white',
    fontSize: '20px'
  },
  imgSize: {
    height: 200,
    width: 200,
    margin: 10
  },
  titleSizeColorContainer: {
    // background: 'blue',
    position: 'relative',
    textAlign: 'center'
  },
  itemContainer: {
    display: 'flex',
    // background: 'red',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  quantityPriceContainer: {
    display: 'flex',
    background: 'aqua',
    width: 200,
    justifyContent: 'space-around'
  }
}

let Cart = (props) => {
  console.log(props, 'cart')
  let [ total, setTotal ] = useState(0)

  return (
    <div>
      <h1 style={styles.title}>
        Shopping Cart
      </h1>
      <div style={styles.itemContent}>
        {
          props.cart.map(item => {
            return <>
            <div style={styles.itemContainer}>
            <img style={styles.imgSize} src={item.picture} alt="" />
            <div style={styles.titleSizeColorContainer}>
            <h3>{item.name}</h3>
            <h4>Size: {item.size}</h4>
            <h4>Color: {item.color}</h4>
            </div>
            <div style={styles.quantityPriceContainer}>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price.toFixed(2)}</p>
            </div>
            </div>
            </>
          })
        }
    </div>
    <div>
      <p>
        Have a question? Call <span style={{color: 'blue'}}>1-800-SON-NEWW</span>
      </p>
      <div>
        <p>Subtotal</p>
        <p style={{borderBottom: '1px solid black'}}>Shipping</p>
        <h4>Total</h4>
        <h4>{total}</h4>
        <Link>
        <button style={styles.checkoutBtn}>Checkout</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

let MapStateToProps = (state) => {
  return {
    cart: state.user ? state.user.cart : []
  }
}

export default connect(MapStateToProps)(Cart);