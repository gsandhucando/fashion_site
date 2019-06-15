import React from "react";
import Items from "../components/Items";
import { shirts } from '../data/data.json';


const Shirts = () => {
  return (
    <div className="shirt-container">
      {shirts.map(shirt => {
        return <Items key={shirt.title} {...shirt} />;
      })}
    </div>
  );
};

export default Shirts;
