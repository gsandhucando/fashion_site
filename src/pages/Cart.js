import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

let styles = {
  title: {
    borderBottom: "1px solid black",
    margin: "10px"
  },
  itemContent: {
    borderBottom: "1px solid black",
    margin: "10px"
  },
  checkoutBtn: {
    border: "none",
    height: "50px",
    width: "120px",
    background: "black",
    color: "white",
    fontSize: "20px"
  },
  imgSize: {
    height: 200,
    width: 200,
    margin: 10
  },
  titleSizeColorContainer: {
    // background: 'blue',
    position: "relative",
    textAlign: "center"
  },
  itemContainer: {
    display: "flex",
    // background: 'red',
    justifyContent: "space-around",
    alignItems: "center"
  },
  quantityPriceContainer: {
    display: "flex",
    width: 300,
    justifyContent: "space-around"
  },
  removeBtn: {
    border: "none",
    height: "50px",
    width: "90px",
    background: "black",
    color: "white",
    fontSize: "20px"
  }
};

let Cart = props => {
  let [total, setTotal] = useState(0);
  let [cart, setCart] = useState(props.cart);

  let removeItemBtn = id => {
    let filterCart = cart.filter(item => {
      if (id !== item._id) {
        return item;
      }
    });
    axios
      .delete(`/api/cart?itemid=${id}&userid=${props.userid}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        setCart(filterCart);
      });
  };

  let totalPrices = () => {
    return cart.reduce((prevValue, currentValue, i, arr) => {
      return prevValue + arr[i].price * arr[i].quantity;
    }, 0);
  };

  useEffect(() => {
    if (cart.length > 0) {
      let totalPrice = totalPrices();
      setTotal(totalPrice);
    }
  }, [cart]);

  return (
    <div>
      <h1 style={styles.title}>Shopping Cart</h1>
      <div className="cartContainer" style={styles.itemContent}>
        {cart.map((item, i) => {
          return (
            <div key={item._id}>
              <div className="itemContainer" style={styles.itemContainer}>
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
                  <button
                    style={styles.removeBtn}
                    onClick={() => removeItemBtn(item._id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p style={{ paddingLeft: "10px" }}>
          Have a question? Call{" "}
          <span style={{ color: "blue" }}>1-800-SON-NEWW</span>
        </p>
        <div className="totalDiv">
          <h4 style={{ borderBottom: "1px solid black" }}>Total</h4>
          <h4>${total.toFixed(2)}</h4>
          <Link to='/checkout'>
            <button style={styles.checkoutBtn}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

let MapStateToProps = state => {
  return {
    cart: state.user ? state.user.cart : [],
    userid: state.user ? state.user._id : ""
  };
};

export default connect(MapStateToProps)(Cart);
