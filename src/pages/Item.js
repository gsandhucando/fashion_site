import React, { useState, useEffect } from "react";
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
    gridTemplateColumns: '1fr 2fr 1fr',
    // background: 'salmon'
  },
  button: {
    height: 50,
    width: 130,
    margin: 10,
    background: '#333',
    color: 'white',
    fontSize: '20px'
  },
  moddle: {
    background: 'rgba(128,128,128,0.8)',
    position: 'absolute',
    top: '0%',
    height: '100vh',
    width: '100vw'
  }
};

const Item = props => {
  let [toggleClick, setToggleClick] = useState(false)

  let checkoutPreview = () => {
    setToggleClick(true)
    console.log('clicked')
  }

  let moddle = <div style={styles.moddle}>hello</div>


  let id = props.match.params.id;

  let price = props.location.state.price;
  return (
    <div style={styles.item}>
      {toggleClick ? moddle : null}
      <button onClick={() => props.history.goBack()} style={styles.button}>
        {ChevronLeft} back
      </button>
      <ItemImgDisplay id={id} items={props.location.state.menu} />
      <ItemDiscDisplay id={id} toggleClick={checkoutPreview} price={price} items={props.location.state} />
      </div>
  );
};

export default Item;
