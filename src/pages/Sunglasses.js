import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import axios from 'axios';


const Sunglasses = () => {
  let [ sunglasses, setSunglasses ] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api/items?category=sunglasses')
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      setSunglasses(res.data)
    }).catch((err)=> console.log(err))
  }, [])

  return (
    <div className="shirt-container">
      {sunglasses.map(sunglass => {
        return <Items key={sunglass._id} {...sunglass} />;
      })}
    </div>
  );
};

export default Sunglasses;