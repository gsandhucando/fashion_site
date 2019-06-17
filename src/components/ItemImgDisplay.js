import React, { useState } from "react";
import { relative } from "path";

const styles = {
  itemContainer: {
    display: 'flex',
    height: '100vh',
  },
  imgContainer: {
    // display: 'grid',
    // gridTemplateRows:  '1fr 1fr 1fr',
    // background: 'green',
    marginTop: 30,
    height: '85vh',
  },
  image: {
    height: 200,
    width: "170px",
    // padding: '50px'
  },
  picture: {
    display: 'flex',
    height: '78vh',
    width: 350,
    margin: 20,
    padding: 10
  }
};

const ItemImgDisplay = ({ items, id }) => {

  let filterImg = items.filter(img => img.id === id.toString().slice(-1));
  let [ picture, setPicture ] = useState(filterImg[0].frontImg)
  let changePictureOnClick = (img) => {
    setPicture(img)
  }
  let front = filterImg.map(img => {
    return (
      (<div style={styles.imgContainer}>
        {img.frontImg ? <img onClick={() => {changePictureOnClick(img.frontImg)}} style={styles.image} src={img.frontImg} alt="" /> : null}
        {img.sideImg ? <img onClick={() => {changePictureOnClick(img.sideImg)}} style={styles.image} src={img.sideImg} alt="" /> : null}
        {img.backImg ? <img onClick={() => {changePictureOnClick(img.backImg)}} style={styles.image} src={img.backImg} alt="" /> : null}
      </div>)
    );
  });

  return (
    <div style={styles.itemContainer}>
      <div style={{ height: "540px", width: 150, }}>
        <ul>
          {front}
        </ul>
      </div>
    <img style={styles.picture} src={picture} alt=""/>
    </div>
  );
};

export default ItemImgDisplay;
