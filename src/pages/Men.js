import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import Shirts from './Shirts';
import Hoodies from './Hoodies';
import Sunglasses from './Sunglasses';

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
      {/* <div
        style={{
          background: "black",
          width: "100vw",
          height: 1,
          marginTop: 10
        }}
      /> */}
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

                <li style={{ textAlign: "center" }} key={items}>
                  <Link to={`/men/${items}`}>{items}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <div style={{display: 'inline-block', marginRight: '25vw', width: '100%', minWidth: '600px'}}>
      <Route exact path='/men/' component={Shirts}/>
      <Route exact path='/men/T-shirts' component={Shirts}/>
      <Route exact path='/men/' component={Hoodies}/>
      <Route exact path='/men/hoodies' component={Hoodies}/>
      <Route exact path='/men/' component={Sunglasses}/>
      <Route exact path='/men/sunglasses' component={Sunglasses}/>
      </div>
    </div>
  );
};

export default Men;
