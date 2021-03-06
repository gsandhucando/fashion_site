import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import Shirts from './Shirts';
import Hoodies from './Hoodies';
import Sunglasses from './Sunglasses';
import MensItems from '../components/MensItems';

const Men = () => {
  let [mensCatelog, setMensCatelog] = useState([
    "T-shirts",
    "Hoodies",
    "Sunglasses"
  ]);
  let [toggleOpen, setToggleOpen] = useState(false);

  let toggle = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <div className="mens-container">
      <div className="sidebar">
        <p
          className="mens-sidebar"
          onClick={toggle}
          style={{ fontSize: 36, fontWeight: "semiBold" }}
        >
          {toggleOpen ? "Mens -" : "Mens +"}
        </p>
        {toggleOpen ? (
          <ul>
            {mensCatelog.map((items, i) => {
              return (

                <li className='side-list-items' style={{ textAlign: "center" }} key={items}>
                  <Link to={`/men/${items}`}>{items}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <div className='itemsContinerDiv' style={{display: 'flex', marginRight: '25vw', width: '100%', minWidth: '600px'}}>
      <Route exact path='/men/' component={MensItems}/>
      <Route path='/men/t-shirts' component={Shirts}/>

      <Route path='/men/hoodies' component={Hoodies}/>

      <Route path='/men/sunglasses' component={Sunglasses}/>
      </div>
    </div>
  );
};

export default Men;
