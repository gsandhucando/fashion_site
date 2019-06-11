import React, { useState } from 'react';

const Men = () => {
  let [mensCatelog, setMensCatelog] = useState(['T-shirts', 'Sweaters', 'Jeans'])
  let [toggleOpen, setToggleOpen] = useState(false)

  let toggle = () => {
    setToggleOpen(!toggleOpen)
  }

  return (
    <div className='mens-container'>
      <div style={{background: 'black', width: '100vw', height: 1, marginTop: 10}}/>
      <div className='sidebar'>
        <p className='mens-sidebar' onClick={toggle} style={{fontSize: 36, fontWeight: 'semiBold'}}>{toggleOpen? 'Mens -' : 'Mens +' }</p>
        { toggleOpen ?
        <ul>
          {mensCatelog.map((items, i) => {
            return (
              <li style={{textAlign: 'center'}} key={items}>{items}</li>
            )
          })}
        </ul>
        :
        null
        }
      </div>
      <div className='men-items'>
        <img src='./images/raw1.jpg' alt=''/>
      </div>
        <div className='shirt-colors'>
        <img src='./images/black.jpg' alt=''/>
        </div>
    </div>
  )
}

export default Men;