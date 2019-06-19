import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ItemImgDisplay from "../components/ItemImgDisplay";
import ItemDiscDisplay from "../components/ItemDiscDisplay";
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
  }
};

const Item = props => {
  let id = props.match.params.id;

  let price = props.location.state.price;
  return (
    <div style={styles.item}>
      <button onClick={() => props.history.goBack()} style={styles.button}>
        {ChevronLeft} back
      </button>
      <ItemImgDisplay id={id} items={props.location.state.menu} />
      <ItemDiscDisplay id={id} price={price} items={props.location.state} />
    </div>
  );
};

export default Item;
