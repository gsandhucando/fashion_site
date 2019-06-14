import React from "react";
import Hoodie from "../components/Hoodie";
let hoodies = [
  {
    title: "Basic Black Hoodie",
    price: 110.00,
    menu: [
      { button: "../images/black.jpg", img: "../images/mens_hoodies/basic_black_hoodie.jpeg" },
      { button: "../images/mocha.png", img: "../images/mens_hoodies/basic_mocha_hoodie.jpeg" },
      { button: "../images/volt.png", img: "../images/mens_hoodies/basic_volt_hoodie.jpeg" },
    ]
  },
  {
    title: "ACNE Black Hoodie",
    price: 150.00,
    menu: [
      { button: "../images/black.jpg", img: "../images/mens_hoodies/acne_hoodie.jpeg" }
    ]
  },
];

const Hoodies = () => {
  return (
    <div className="shirt-container">
      {hoodies.map(hoodie => {
        return <Hoodie key={hoodie.title} {...hoodie} />;
      })}
    </div>
  );
};

export default Hoodies;