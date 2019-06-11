import React, { useEffect, useState } from "react";
import Style from "./css/Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({nav}) => {
  let [mobile, setMobile] = useState(false);
  let [navList, setNavList] = useState(["MEN", "WOMEN", "CART", "CONTACT"]);

  let updateDimensions = () => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  return (
    <nav className={Style.navContiner}>
      <div>
      <Link to='/'>
      <h1 style={{position: 'absolute', left: 30, fontWeight: 90}}>RAW.</h1>
      </Link>
      <ul className={Style.navUl}>
        {nav.map((list, index) => {
          return (

          <li className={Style.navLi} key={list}><Link to={`/${list}`}>{list}</Link></li>);
        })}
      </ul>
      </div>
    </nav>
  );
};

export default Nav;
