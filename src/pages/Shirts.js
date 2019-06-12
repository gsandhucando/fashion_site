import React from 'react';
import Shirt from '../components/Shirt';
let shirts = [
  {
    title: "RAW tee",
    price: 35.0,
    menu: [
      { button: "../images/black.jpg", img: "../images/raw1.jpg" },
      { button: "../images/white.jpg", img: "../images/raw_white.jpg" },
      { button: "../images/gray.jpg", img: "../images/raw_gray.jpg" },
      { button: "../images/blue.jpg", img: "../images/raw_blue.jpg" }
    ]
  }
];

const Shirts = () => {
  return (
    <div>
      {shirts.map(shirt => {
        return <Shirt key={shirt.title} {...shirt}/>
      })
      }
    </div>
  )
}

export default Shirts;