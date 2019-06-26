import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';

let styles = {
  modal: {
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: "0%",
    height: "100vh",
    width: "100vw",
  },
  modalCard: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '3.0em',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    height: '95vh',
    width: '600px',
    background: 'white',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
  },
  checkoutBtn: {
    height: '50px',
    width: '150px',
    background: 'black',
    color: 'white',
    fontSize: '20px',
  },
  modalPic: {
    height: '250px',
    width: '250px',
  },
  modalDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
  }
}

let Modal = (props) => {
  console.log(props)
  return(
<div onClick={props.exitCheckoutPreview} style={styles.modal}>
    <div style={styles.modalCard}>
      <h1>You've got great taste!</h1>
      <p>Added to your cart.</p>
      <div style={styles.modalDiv}>
      <img style={styles.modalPic} src={props.pictures.frontImg} alt="#"/>
      </div>
      <p>{props.title}</p>
      <p>Size: {props.size}</p>
      <p>Color: {props.pictures.color}</p>
      <p>Quantity: {props.quantity}</p>
      <p>${props.price.toFixed(2)}</p>
      <div>
        { props.user ?
          <button onClick={() => {props.addToCart({size: props.size, color: props.pictures.color, itemId: props.currentId, quantity: props.quantity, userId: props.user._id, name: props.title, picture: props.pictures.frontImg, price: props.price})}} style={styles.checkoutBtn}>Checkout</button> :
      <Link to="/checkout">
      <button style={styles.checkoutBtn}>Checkout</button>
      </Link>
        }
      </div>
    </div>
  </div>
  )
}

let MapDispatchToProps = (dispatch) => {
  return {
    addToCart: (body)=> {
      axios.post('http://localhost:3001/api/cart', body)
      .then(response => {
        console.log(response.data, 'response data******')
        if (response.status !== 200) {
          throw new Error(response.data.message)
        }
        dispatch({
          type: 'ADD_ITEM', payload: {color: body.color, size: body.size, id: body.itemId, title: body.title, quantity: body.quantity, name: body.name, picture: body.picture, price: body.price }
        })
      })
    }
  }
}

let MapStateToProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Modal);