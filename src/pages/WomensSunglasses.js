import React from "react";
import Items from "../components/Items";
import { womens_sunglasses } from '../data/data.json';


const WomensSunglasses = (props) => {
  console.log(props)
  return (
    <div className="shirt-container">
      {womens_sunglasses.map(sunglass => {
        return <Items key={sunglass.title} {...sunglass} />;
      })}
    </div>
  );
};

export default WomensSunglasses;