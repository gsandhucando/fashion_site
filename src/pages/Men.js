import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import Shirts from './Shirts';


const Men = () => {
  let [mensCatelog, setMensCatelog] = useState([
    "T-shirts",
    "Sweaters",
    "Jeans"
  ]);
  let [toggleOpen, setToggleOpen] = useState(false);

  let toggle = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <div className="mens-container">
      <div
        style={{
          background: "black",
          width: "100vw",
          height: 1,
          marginTop: 10
        }}
      />
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
      <Route path='/men/t-shirts' component={Shirts}/>
    </div>
  );
};

export default Men;
