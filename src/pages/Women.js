import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import WomensHoodies from './WomensHoodies';
import WomensSunglasses from './WomensSunglasses';
import WomensItems from '../components/WomensItems';

const Women = () => {
  let [womensCatelog, setwomensCatelog] = useState([
    "Tops",
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
          {toggleOpen ? "Womens -" : "Womens +"}
        </p>
        {toggleOpen ? (
          <ul>
            {womensCatelog.map((items, i) => {
              return (

                <li className='side-list-items' style={{ textAlign: "center" }} key={items}>
                  <Link to={`/women/${items}`}>{items}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <div style={{display: 'inline-block', marginRight: '25vw', width: '100%', minWidth: '600px'}}>
      <Route exact path='/women/' component={WomensItems}/>
      <Route path='/women/tops' component={WomensItems}/>

      <Route path='/women/hoodies' component={WomensHoodies}/>

      <Route path='/women/sunglasses' component={WomensSunglasses}/>
      </div>
    </div>
  );
};

export default Women;