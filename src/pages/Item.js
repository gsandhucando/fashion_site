import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ItemImgDisplay from "../components/ItemImgDisplay";
import ItemDiscDisplay from "../components/ItemDiscDisplay";
import { mixedTypeAnnotation } from "@babel/types";
const ChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

const styles = {
  item: {
    display: "grid",
    // justifyContent: "center",
    gridTemplateColumns: "1fr 2fr 1fr"
    // background: 'salmon'
  },
  button: {
    height: 50,
    width: 130,
    margin: 10,
    background: "#333",
    color: "white",
    fontSize: "20px"
  },
  moddle: {
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: "0%",
    height: "100vh",
    width: "100vw",
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  moddleCard: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '3.5em',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    height: '600px',
    width: '600px',
    background: 'white',
    transform: 'translate(-50%, -50%)',
    padding: '10px'
  },
  checkoutBtn: {
    height: '50px',
    width: '150px',
    background: 'black',
    color: 'white',
    fontSize: '20px',
  }
};

const Item = props => {
  let [toggleClick, setToggleClick] = useState(false);

  let checkoutPreview = () => {
    setToggleClick(true);
    console.log("clicked");
  };

  let exitCheckoutPreview = () => {
    setToggleClick(false);
  }

  let title = props.location.state.title
  let price = props.location.state.price


  let moddle = <div onClick={exitCheckoutPreview} style={styles.moddle}>
    <div style={styles.moddleCard}>
      <h1>You've got great taste!</h1>
      <p>Added to your cart.</p>
      <p>{title}</p>
      <p>${price.toFixed(2)}</p>
      <div>
      <Link to="/checkout">
      <button style={styles.checkoutBtn}>Checkout</button>
      </Link>
      </div>
    </div>
  </div>;

  let id = props.match.params.id;

  console.log(props, 'modal')

  return (
    <div style={styles.item}>
      {toggleClick ? moddle : null}
      <button onClick={() => props.history.goBack()} style={styles.button}>
        {ChevronLeft} back
      </button>
      <ItemImgDisplay id={id} items={props.location.state.menu} />
      <ItemDiscDisplay
        id={id}
        toggleClick={checkoutPreview}
        price={price}
        items={props.location.state}
      />
    </div>
  );
};

export default Item;
