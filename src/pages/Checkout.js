import React, { useRef, useState } from "react";
import axios from "axios";
import { userInfo } from "os";

let styles = {
  checkoutContainer: {
    display: "flex",
    flexWrapper: "wrap",
    height: "70vh",
    width: "90vw",
    margin: "50px"
  },
  guestContainer: {
    display: "flex",
    flexDirection: "column",
    // margin: '120px',
    width: "100%",
    paddingTop: "100px",
    marginLeft: "50px",
    lineHeight: "4.3em"
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    // margin: '120px',
    width: "100%",
    paddingTop: "100px",
    marginLeft: "50px",
    lineHeight: "2.2em",

  },
  signInBtn: {
    border: "none",
    height: "50px",
    width: "200px",
    background: "black",
    color: "white",
    fontSize: "20px",
    marginTop: '10px'
  },
  divider: {
    position: "absolute",
    height: "60vh",
    width: "1px",
    background: "#AFAFAF",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  inputStyle: {
    height: "30px",
    width: "60%"
  },
  title: {
    fontSize: "38px"
  }
};

const Checkout = (props) => {
  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let signUpEmailRef = useRef(null);
  let signUpPasswordRef = useRef(null);
  let signUpConfirmPasswordRef = useRef(null);
  let [ errorMessage, setErrorMessage ] = useState('');


  let handleSubmit = e => {
    console.log("submitting");
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username: emailRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        console.log(res.data, "login");
        if (res.status !== 200) {
          throw new Error(res.data.message);
        }
        props.history.goBack()
      })
      .catch(err => setErrorMessage(err.message));
  };

  let handleSignUpSubmit = e => {
    console.log("submitting");
    e.preventDefault();
    if (signUpPasswordRef.current.value === signUpConfirmPasswordRef.current.value) {
      axios
        .post("http://localhost:3001/signup", {
          email: signUpEmailRef.current.value,
          password: signUpPasswordRef.current.value
        })
        .then(res => {
          console.log(res.data, "signup");
          if (res.status !== 200) {
            throw new Error(res.data.message);
          }
          setErrorMessage('')
        })
        .catch(err => setErrorMessage(err.message));

    } else {
      setErrorMessage('password doesnt match try again')
    }
  };

  return (
    <div style={styles.checkoutContainer}>

      <p>{errorMessage}</p>
      <div style={styles.loginContainer}>
        <p style={styles.title}>Sign Up</p>
        <form onSubmit={handleSignUpSubmit}>
        <p>Please enter your email</p>
        <input ref={signUpEmailRef} style={styles.inputStyle} />
        <p>Password</p>
          <input ref={signUpPasswordRef} style={styles.inputStyle} />
        <p>Confirm Password</p>
          <input ref={signUpConfirmPasswordRef} style={styles.inputStyle} />
        <button type='submit' style={styles.signInBtn}>Sign up & Checkout</button>
        </form>
      </div>
      <div style={styles.divider} />
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
          <button type="submit" style={styles.signInBtn}>
            Sign in & Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
