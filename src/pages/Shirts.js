import React from 'react';
import Shirt from '../components/Shirt';
let shirts = [
  {
    title: "RAW tee",
    price: 35.00,
    menu: [
      { button: "../images/black.jpg", img: "../images/raw1.jpg" },
      { button: "../images/white.jpg", img: "../images/raw_white.jpg" },
      { button: "../images/gray.jpg", img: "../images/raw_gray.jpg" },
      { button: "../images/blue.jpg", img: "../images/raw_blue.jpg" }
    ]
  },
  {
    title: 'Twin Hearts',
    price: 95.00,
    menu: [
      { button: "../images/blue.jpg", img: "../images/twin_heart.jpeg" },
      { button: "../images/black.jpg", img: "../images/twin_heart_black.jpeg" }
    ]
  },
  {
    title: 'Single Hearts',
    price: 95.00,
    menu: [
      { button: "../images/white.jpg", img: "../images/white_heart.jpeg" }
    ]
  },
];

const Shirts = () => {
  return (
    <div className='shirt-container'>
      {shirts.map(shirt => {
        return <Shirt key={shirt.title} {...shirt}/>
      })
      }
    </div>
  )
}

export default Shirts;