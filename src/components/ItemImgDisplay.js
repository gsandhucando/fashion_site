import React, { useState } from "react";

const styles = {
  image: {
    height: 100,
    width: "100%"
  },
  picture: {
    height: 300,
    width: 300
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
      (<div>
        {img.frontImg ? <img onClick={() => {changePictureOnClick(img.frontImg)}} style={styles.image} src={img.frontImg} /> : null}
        {img.sideImg ? <img onClick={() => {changePictureOnClick(img.sideImg)}} style={styles.image} src={img.sideImg} /> : null}
        {img.backImg ? <img onClick={() => {changePictureOnClick(img.backImg)}} style={styles.image} src={img.backImg} /> : null}
      </div>)
    );
  });

  return (
    <section style={{ position: "flex" }}>
      <aside style={{ height: "540px", width: 200 }}>
        <ul>
          {front}
        </ul>
      </aside>
    <img style={styles.picture} src={picture} alt=""/>
    </section>
  );
};

export default ItemImgDisplay;
