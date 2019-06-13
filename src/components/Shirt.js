import React, {useState} from 'react';


const Shirt = ({ title, price, menu }) => {
  let [shirtChange, setShirtChange] = useState(menu[0].img);
  return(
    <div className="item-container">
    <div className="men-items">
      <img src={shirtChange} alt="" />
    </div>
    <div>
      {menu.map(item => {
       return <img
       className='shirt-colors'
       key={item.img}
        onMouseOver={() => {
          setShirtChange(item.img);
        }}
        src={item.button}
        alt=""
        />
      })}
      <div>
      <p styple={{ fontSize: 36 }}>{title}</p>
      <p styple={{ fontSize: 32 }}>${price}</p>
      </div>
    </div>

  </div>
  )
}

export default Shirt;