import React, { useRef, useState } from "react";
import axios from "axios";

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
  // loginContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   // margin: '120px',
  //   width: "100%",
  //   paddingTop: "100px",
  //   marginLeft: "50px",
  //   lineHeight: "2.2em"
  // },
  // signInBtn: {
  //   border: "none",
  //   height: "50px",
  //   width: "200px",
  //   background: "black",
  //   color: "white",
  //   fontSize: "20px",
  //   marginTop: "10px"
  // },
  divider: {
    position: "absolute",
    height: "60vh",
    width: "1px",
    background: "#AFAFAF",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  // inputStyle: {
  //   height: "30px",
  //   width: "40%"
  // },
  title: {
    display: "flex",
    textAlign: "center",
    fontSize: "38px",
    marginBottom: '20px'
  }
};

const Checkout = props => {
  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let signUpEmailRef = useRef(null);
  let signUpPasswordRef = useRef(null);
  let signUpConfirmPasswordRef = useRef(null);
  let [errorMessage, setErrorMessage] = useState("");

  let handleSubmit = e => {
    console.log("submitting");
    e.preventDefault();
    axios
      .post("/login", {
        username: emailRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        console.log(res.data, "login");
        if (res.status !== 200) {
          throw new Error(res.data.message);
        }
        props.history.goBack();
      })
      .catch(err => setErrorMessage(err.message));
  };

  let handleSignUpSubmit = e => {
    console.log("submitting");
    e.preventDefault();
    if (
      signUpPasswordRef.current.value ===
        signUpConfirmPasswordRef.current.value &&
      signUpPasswordRef.current.value.length >= 6
    ) {
      axios
        .post("/signup", {
          email: signUpEmailRef.current.value,
          password: signUpPasswordRef.current.value
        })
        .then(res => {
          console.log(res.data, "signup");
          if (res.status !== 200) {
            throw new Error(res.data.message);
          }
          setErrorMessage("");
        })
        .catch(err => setErrorMessage(err.message));
    } else {
      setErrorMessage("password doesnt match try again");
    }
  };

  return (
    <div className="checkoutContainer">
      <p>{errorMessage}</p>
      <div className="loginContainer">
        <p style={styles.title}>Sign Up</p>
        <form className="signupform" onSubmit={handleSignUpSubmit}>
          <p>Please enter your email</p>
          <input placeholder='Please enter email' ref={signUpEmailRef} style={styles.inputStyle} />
          <p>Password</p>
          <input placeholder='Please enter password' ref={signUpPasswordRef} style={styles.inputStyle} />
          <p>Confirm Password</p>
          <input placeholder='Please confirm password' ref={signUpConfirmPasswordRef} style={styles.inputStyle} />
          <button className="signInBtn" type="submit">
            Sign up & Checkout
          </button>
        </form>
      </div>
      <div className="divdivider" style={styles.divider} />
      <div className="loginContainer">
        <p className='signInTitle'>Sign In</p>
        <form className="signinform" onSubmit={handleSubmit}>
          <p>Email</p>
          <input placeholder='Please enter email' ref={emailRef} style={styles.inputStyle} />
          <p>Password</p>
          <input placeholder='Please enter password' ref={passwordRef} style={styles.inputStyle} />
          <p>Forgot password?</p>
          <p className="signininfo">
            By signing in to your account, you agree to our{" "}
            <span>Privacy Policy</span> and <span>Terms & Conditions.</span>
          </p>
          <button className="signInBtn" type="submit">
            Sign in & Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
