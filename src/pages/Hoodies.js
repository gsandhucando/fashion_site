import React from "react";
import Items from "../components/Items";
import { hoodies } from '../data/data.json'


const Hoodies = (props) => {
  console.log(props)
  return (
    <div className="shirt-container">
      {hoodies.map(hoodie => {
        return <Items key={hoodie.title} {...hoodie} />;
      })}
    </div>
  );
};

export default Hoodies;