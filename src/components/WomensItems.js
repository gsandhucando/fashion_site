import React from 'react';
import Items from './Items';
import { tops, womens_hoodies, womens_sunglasses } from '../data/data.json';

let allItems = []

const WomensItems = () => {
  return (
    <div className='shirt-container'>
      {allItems.concat(tops, womens_hoodies, womens_sunglasses).map(item => {
        return <Items key={item.title} {...item}/>
      })}
    </div>
  )
}

export default WomensItems;