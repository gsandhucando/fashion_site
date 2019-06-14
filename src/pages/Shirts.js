import React from "react";
import Shirt from "../components/Shirt";
let shirts = [
  {
    title: "RAW tee",
    price: 35.0,
    menu: [
      { button: "../images/black.jpg", img: "../images/mens_shirts/raw1.jpg" },
      {
        button: "../images/white.jpg",
        img: "../images/mens_shirts/raw_white.jpg"
      },
      {
        button: "../images/gray.jpg",
        img: "../images/mens_shirts/raw_gray.jpg"
      },
      {
        button: "../images/dark_blue.jpg",
        img: "../images/mens_shirts/raw_blue.jpg"
      }
    ]
  },
  {
    title: "Twin Hearts",
    price: 95.0,
    menu: [
      {
        button: "../images/dark_blue.jpg",
        img: "../images/mens_shirts/twin_heart.jpeg"
      },
      {
        button: "../images/black.jpg",
        img: "../images/mens_shirts/twin_heart_black.jpeg"
      }
    ]
  },
  {
    title: "Single Hearts",
    price: 95.0,
    menu: [
      {
        button: "../images/white.jpg",
        img: "../images/mens_shirts/white_heart.jpeg"
      }
    ]
  },
  {
    title: "Basic Tee",
    price: 65.0,
    menu: [
      {
        button: "../images/black.jpg",
        img: "../images/mens_shirts/basic_black_round.jpg"
      },
      {
        button: "../images/white.jpg",
        img: "../images/mens_shirts/basic_white_round.jpg"
      },
      {
        button: "../images/gray.jpg",
        img: "../images/mens_shirts/basic_gray_round.jpg"
      }
    ]
  },
  {
    title: "Belly Sky",
    price: 85.0,
    menu: [
      {
        button: "../images/yellow.png",
        img: "../images/mens_shirts/belly_sky_yellow.jpeg"
      },
      {
        button: "../images/red.png",
        img: "../images/mens_shirts/belly_sky_red.jpeg"
      },
      {
        button: "../images/purple.png",
        img: "../images/mens_shirts/belly_sky_purple.jpeg"
      }
    ]
  },
  {
    title: "Slim Fit Henley",
    price: 105.0,
    menu: [
      {
        button: "../images/blue.png",
        img: "../images/mens_shirts/slim_fit_henley_blue.jpeg"
      },
      {
        button: "../images/blue_iron.png",
        img: "../images/mens_shirts/slim_fit_henley_blue_iron.jpeg"
      }
    ]
  }
];

const Shirts = () => {
  return (
    <div className="shirt-container">
      {shirts.map(shirt => {
        return <Shirt key={shirt.title} {...shirt} />;
      })}
    </div>
  );
};

export default Shirts;
