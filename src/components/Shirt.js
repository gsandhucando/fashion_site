import React, {useState} from 'react';


const Shirt = ({ title, price, menu }) => {
  let [shirtChange, setShirtChange] = useState(menu[0].img);
  return(
    <div className="item-container">
    <div className="men-items">
      <img src={shirtChange} alt="" />
    </div>
    <div className="shirt-colors">
      {menu.map(item => {
       return <img
       key={item.img}
        onMouseOver={() => {
          setShirtChange(item.img);
        }}
        src={item.button}
        alt=""
      />
      })}

      <p styple={{ fontSize: 36 }}>{title}</p>
      <p styple={{ fontSize: 32 }}>${price}</p>
    </div>
  </div>
  )
}

export default Shirt;