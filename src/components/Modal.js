import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import axios from 'axios'

let styles = {
  modal: {
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: "0%",
    height: "100vh",
    width: "100vw",
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
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
  // console.log(props, 'modal')
  // let postItems = () => {
  //   axios.post('http://localhost:3001/api/cart', { item_id: props.currentId,  size: props.size, color: props.pictures.color}).then(res => {
  //     if (res.status !== 200) {
  //       throw new Error('cant add item to cart')
  //     }
  //     console.log(res.data)
  //   }).catch(err => console.log(err))
  // }
  console.log(props, 'modal need img')

  return(
<div onClick={props.exitCheckoutPreview} style={styles.modal}>
    <div style={styles.modalCard}>
      <h1>You've got great taste!</h1>
      <p>Added to your cart.</p>
      <div style={styles.modalDiv}>
      <img style={styles.modalPic} src={props.pictures.frontImg} />
      </div>
      <p>{props.title}</p>
      <p>Size: {props.size}</p>
      <p>Color: {props.pictures.color}</p>
      <p>Quantity: {props.quantity}</p>
      <p>${props.price.toFixed(2)}</p>
      <div>
      <Link to="/checkout">
      <button style={styles.checkoutBtn}>Checkout</button>
      </Link>
      </div>
    </div>
  </div>
  )
}

export default Modal;