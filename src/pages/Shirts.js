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
      { button: "../images/dark_blue.jpg", img: "../images/raw_blue.jpg" }
    ]
  },
  {
    title: 'Twin Hearts',
    price: 95.00,
    menu: [
      { button: "../images/dark_blue.jpg", img: "../images/twin_heart.jpeg" },
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
  {
    title: "Basic Tee",
    price: 65.00,
    menu: [
      { button: "../images/black.jpg", img: "../images/basic_black_round.jpg" },
      { button: "../images/white.jpg", img: "../images/basic_white_round.jpg" },
      { button: "../images/gray.jpg", img: "../images/basic_gray_round.jpg" }
    ]
  },
  {
    title: "Belly Sky",
    price: 85.00,
    menu: [
      { button: "../images/yellow.png", img: "../images/belly_sky_yellow.jpeg" },
      { button: "../images/red.png", img: "../images/belly_sky_red.jpeg" },
      { button: "../images/purple.png", img: "../images/belly_sky_purple.jpeg" }
    ]
  },
  {
    title: "Slim Fit Henley",
    price: 105.00,
    menu: [
      { button: "../images/blue.png", img: "../images/slim_fit_henley_blue.jpeg" },
      { button: "../images/blue_iron.png", img: "../images/slim_fit_henley_blue_iron.jpeg" }
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