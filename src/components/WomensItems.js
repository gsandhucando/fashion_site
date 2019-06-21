import React, { useEffect, useState }  from 'react';
import Items from './Items';
import axios from 'axios';


const WomensItems = () => {
  let [ womensItems, setWomensItems ] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3001/api/items?category=tops,womens_hoodies,womens_sunglasses').then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message)
      }
      setWomensItems(res.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className='shirt-container'>
      {womensItems.map(item => {
        return <Items key={item._id} {...item}/>
      })}
    </div>
  )
}

export default WomensItems;