import React, { useEffect, useState } from 'react';
import Items from './Items';
import axios from 'axios';


const MensItems = () => {
  let [ mensItems, setMensItems ] = useState([])

  useEffect(()=> {
    axios.get('/api/items?category=shirts,hoodies,sunglasses').then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      console.log(res.data)
      setMensItems(res.data)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div className='shirt-container'>
      {mensItems.map(item => {
        return <Items key={item._id} {...item}/>
      })}
    </div>
  )
}

export default MensItems;