import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import axios from 'axios';


const WomensHoodies = () => {
  let [ womensHoodies, setWomensHoodies ] = useState([])

  useEffect(()=> {
    axios.get('/api/items?category=womens_hoodies').then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      setWomensHoodies(res.data)
    }).catch((err) => console.log(err))
  }, [])


  return (
    <div className="shirt-container">
      {womensHoodies.map(hoodie => {
        return <Items key={hoodie._id} {...hoodie} />;
      })}
    </div>
  );
};

export default WomensHoodies;