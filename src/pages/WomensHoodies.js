import React from "react";
import Items from "../components/Items";
import { womens_hoodies } from '../data/data.json'


const WomensHoodies = (props) => {
  console.log(props)
  return (
    <div className="shirt-container">
      {womens_hoodies.map(hoodie => {
        return <Items key={hoodie.title} {...hoodie} />;
      })}
    </div>
  );
};

export default WomensHoodies;