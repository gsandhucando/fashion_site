import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

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
    width: 300,
    justifyContent: 'space-around'
  }
}

let Cart = (props) => {
  console.log(props, 'cart')

  let [ total, setTotal ] = useState(0)
  let [ removeItem, setRemoveItem ] = useState(null)
  let [ cart, setCart ] = useState(props.cart)

  let removeItemBtn = (id) => {
    let filterCart = cart.filter(item => {
      if (id !== item._id) {
        return item
      }
    })
    axios.delete(`/api/cart?itemid=${id}&userid=${props.userid}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.data.message)
      }
      setCart(filterCart)
      console.log(response.data.message)
    })
  }

  let totalPrices = ()=> {
      return cart.reduce((prevValue, currentValue, i, arr)=> {
      return prevValue + arr[i].price * arr[i].quantity
    }, 0)

  }

  useEffect(() => {
    if (cart.length > 0) {
      let totalPrice = totalPrices()
      console.log(totalPrice, 'totalPrice')
      setTotal(totalPrice)

    }
    console.log(total, 'total')
  },[cart]);


  return (
    <div>
      <h1 style={styles.title}>
        Shopping Cart
      </h1>
      <div style={styles.itemContent}>
        {
          cart.map((item, i)=> {
            return <div key={item._id}>
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
            <div>
              <button onClick={()=>removeItemBtn(item._id)}>Remove Item</button>
            </div>
            </div>
            </div>
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
        <h4>${total.toFixed(2)}</h4>
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
    cart: state.user ? state.user.cart : [],
    userid: state.user ? state.user._id : ''
  }
}

export default connect(MapStateToProps)(Cart);