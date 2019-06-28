import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import axios from 'axios';


const WomensSunglasses = () => {
  let [ womensSunglasses, setWomensSunglasses ] = useState([])

  useEffect(()=> {
    axios.get('/api/items?category=womens_sunglasses').then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      setWomensSunglasses(res.data)
    }).catch((err) => console.log(err))
  }, [])


  return (
    <div className="shirt-container">
      {womensSunglasses.map(sunglass => {
        return <Items key={sunglass._id} {...sunglass} />;
      })}
    </div>
  );
};

export default WomensSunglasses;