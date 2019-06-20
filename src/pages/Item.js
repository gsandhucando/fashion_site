import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ItemImgDisplay from "../components/ItemImgDisplay";
import ItemDiscDisplay from "../components/ItemDiscDisplay";
import { mixedTypeAnnotation } from "@babel/types";
import Modal from '../components/Modal';
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

};

const Item = props => {
  let [toggleClick, setToggleClick] = useState(false);

  console.log(props);


  let checkoutPreview = () => {
    setToggleClick(true);
    console.log("clicked");
  };

  let exitCheckoutPreview = () => {
    setToggleClick(false);
  }

  let title = props.location.state.title
  let price = props.location.state.price




  let id = props.match.params.id;

  console.log(props, 'modal')

  return (
    <div style={styles.item}>
      {toggleClick ? <Modal exitCheckoutPreview={exitCheckoutPreview} title={title} price={price} /> : null}
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
