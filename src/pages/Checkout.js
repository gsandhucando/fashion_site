import React from "react";

const Checkout = () => {
  return (
    <div>
      <div>
        <h3>Guest</h3>
        <p>You can create an account after checkout.</p>
        <button>Sign in & Checkout</button>
      </div>
      <div>
        <h3>Sign In</h3>
        <form>
          <p>Email</p>
          <input />
          <p>Password</p>
          <input />
          <p>Forgot password?</p>
          <p>
            By signing in to your account, you agree to our{" "}
            <span>Privacy Policy</span> and <span>Terms & Conditions.</span>
          </p>
          <button>Sign in & Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
