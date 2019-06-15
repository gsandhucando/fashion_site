import React from 'react';
import Items from './Items';
import { shirts, hoodies, sunglasses } from '../data/data.json';

let allItems = []

const MensItems = () => {
  return (
    <div className='shirt-container'>
      {allItems.concat(shirts, hoodies, sunglasses).map(item => {
        return <Items key={item.title} {...item}/>
      })}
    </div>
  )
}

export default MensItems;