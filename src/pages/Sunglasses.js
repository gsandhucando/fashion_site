import React from "react";
import Items from "../components/Items";
import { sunglasses } from '../data/data.json';


const Sunglasses = (props) => {
  console.log(props)
  return (
    <div className="shirt-container">
      {sunglasses.map(sunglass => {
        return <Items key={sunglass.title} {...sunglass} />;
      })}
    </div>
  );
};

export default Sunglasses;