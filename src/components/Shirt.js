import React, {useState} from 'react';


const Shirt = ({ title, price, menu }) => {
  let [shirtChange, setShirtChange] = useState(menu[0].img);
  return(
    <div className="item-container">
    <div className="men-items">
      <img  src={shirtChange} alt="" />
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
      <p styple={{ fontSize: 36 }}><span style={{fontWeight: '600'}}>{title}</span></p>
      <p styple={{ fontSize: 32 }}><span style={{fontWeight: '700'}}>${price.toFixed(2)}</span></p>
      </div>
    </div>

  </div>
  )
}

export default Shirt;