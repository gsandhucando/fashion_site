import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ItemImgDisplay from "../components/ItemImgDisplay";
import ItemDiscDisplay from "../components/ItemDiscDisplay";
import Modal from "../components/Modal";
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
  }
};

const Item = props => {
  let [toggleClick, setToggleClick] = useState(false);
  let [currentId, setCurrentId] = useState(props.location.state.menu[0]._id);
  let [currentSize, setCurrentSize] = useState("S");
  let [quantity, setQuantity] = useState(1);

  console.log(props);

  let checkoutPreview = () => {
    setToggleClick(true);
    console.log("clicked");
  };

  let exitCheckoutPreview = () => {
    setToggleClick(false);
  };

  let title = props.location.state.title;
  let price = props.location.state.price;

  let id = props.match.params.id;

  console.log(props, "modal");

  return (
    <div style={styles.item}>
      {toggleClick ? (
        <Modal
          quantity={quantity}
          size={currentSize}
          exitCheckoutPreview={exitCheckoutPreview}
          title={title}
          price={price}
          currentId={currentId}
          pictures={props.location.state.menu.find(pic => {
            return pic._id === currentId;
          })}
        />
      ) : null}
      <button onClick={() => props.history.goBack()} style={styles.button}>
        {ChevronLeft} back
      </button>
      <ItemImgDisplay id={id} items={props.location.state.menu} />
      <ItemDiscDisplay
        quantity={quantity}
        setQuantity={setQuantity}
        setCurrentSize={setCurrentSize}
        setCurrentId={setCurrentId}
        id={id}
        toggleClick={checkoutPreview}
        price={price}
        items={props.location.state}
      />
    </div>
  );
};

export default Item;
