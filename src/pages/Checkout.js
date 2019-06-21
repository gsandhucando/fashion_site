import React, { useRef } from "react";
import axios from 'axios';

let styles = {
  checkoutContainer: {
    display: 'flex',
    flexWrapper: 'wrap',
    height: '70vh',
    width: '90vw',
    margin: '50px',

  },
  guestContainer: {
    display: 'flex',
    flexDirection: 'column',
    // margin: '120px',
    width: '100%',
    paddingTop: '100px',
    marginLeft: '50px',
    lineHeight: '4.3em'
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    // margin: '120px',
    width: '100%',
    paddingTop: '100px',
    marginLeft: '50px',
    lineHeight: '2.2em'
  },
  signInBtn: {
    border: 'none',
    height: '50px',
    width: '200px',
    background: 'black',
    color: 'white',
    fontSize: '20px'
  },
  divider: {
    position: 'absolute',
    height: '60vh',
    width: '1px',
    background: '#AFAFAF',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  inputStyle: {
    height: '30px',
    width: '60%'
  },
  title: {
    fontSize: '38px'
  }
}

const Checkout = () => {
  let emailRef = useRef(null)
  let passwordRef = useRef(null)

  let handleSubmit = (e)=> {
    console.log('submitting')
    e.preventDefault()
    axios.post('http://localhost:3001/signup', {email: emailRef.current.value, password: passwordRef.current.value}).then(res => {
      console.log(res.data, 'login')
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
    }).catch(err => console.log(err))
  }

  return (
    <div style={styles.checkoutContainer}>
      <div style={styles.guestContainer}>
        <p style={styles.title}>Guest</p>
        <p>You can create an account after checkout.</p>
        <button style={styles.signInBtn}>Sign in & Checkout</button>
      </div>
      <div style={styles.divider}></div>
      <div style={styles.loginContainer}>
        <p style={styles.title}>Sign In</p>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input ref={emailRef} style={styles.inputStyle} />
          <p>Password</p>
          <input ref={passwordRef} style={styles.inputStyle} />
          <p>Forgot password?</p>
          <p>
            By signing in to your account, you agree to our{" "}
            <span>Privacy Policy</span> and <span>Terms & Conditions.</span>
          </p>
          <button type='submit' style={styles.signInBtn}>Sign in & Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
