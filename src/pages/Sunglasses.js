import React from "react";
import Sunglass from "../components/Sunglass";
let sunglasses = [
  {
    title: `Ray Ban "Boyfriends"`,
    price: 210.00,
    menu: [
      { button: "../images/rb_black.png", img: "../images/mens_sunglasses/rb_bf_black.jpeg" },
      { button: "../images/rb_brown.png", img: "../images/mens_sunglasses/rb_bf_brown.jpeg" }
    ]
  },

];

const Sunglasses = () => {
  return (
    <div className="shirt-container">
      {sunglasses.map(sunglass => {
        return <Sunglass key={sunglass.title} {...sunglass} />;
      })}
    </div>
  );
};

export default Sunglasses;