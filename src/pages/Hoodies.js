import React, { useEffect, useState }  from "react";
import Items from "../components/Items";
import axios from 'axios';


const Hoodies = () => {
  let [ hoodies, setHoodies ] = useState([])

  useEffect(()=> {
    axios.get('/api/items?category=hoodies')
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      setHoodies(res.data)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div className="shirt-container">
      {hoodies.map(hoodie => {
        return <Items key={hoodie._id} {...hoodie} />;
      })}
    </div>
  );
};

export default Hoodies;