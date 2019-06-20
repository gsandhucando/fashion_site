import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import { shirts } from '../data/data.json';
import axios from 'axios';


const Shirts = () => {
  let [ shirts, setShirts ] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api/items?category=shirts').then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      console.log(res.data)
      setShirts(res.data)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div className="shirt-container">
      {shirts.map(shirt => {
        return <Items key={shirt._id} {...shirt} />;
      })}
    </div>
  );
};

export default Shirts;
