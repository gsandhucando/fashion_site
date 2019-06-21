import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import axios from 'axios';



const WomensTops = () => {
  let [tops, setTops] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api/items?category=tops').then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      setTops(res.data)
    }).catch((err) => console.log(err))
  }, [])


  return (
    <div className="shirt-container">
      {tops.map(hoodie => {
        return <Items key={hoodie._id} {...hoodie} />;
      })}
    </div>
  );
};

export default WomensTops;