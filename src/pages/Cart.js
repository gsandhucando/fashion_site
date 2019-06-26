import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let styles = {
  title: {
    borderBottom: '1px solid black',
    margin: '10px'
  },
  footerCheckout: {
    borderTop: '1px solid black',
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

}

let Cart = (props) => {
  console.log(props, 'cart')
  return (
    <div>
      <h1 style={styles.title}>
        Shopping Cart
      </h1>
      <div style={styles.footerCheckout}>
      <p>
        Have a question? Call <span style={{color: 'blue'}}>1-800-SON-NEWW</span>
      </p>
      <div>
        <p>Subtotal</p>
        <p style={{borderBottom: '1px solid black'}}>Shipping</p>
        <h4>Total</h4>
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