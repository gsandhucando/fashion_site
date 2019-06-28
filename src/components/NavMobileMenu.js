import React from "react";
import { Link } from "react-router-dom";

const NavMobileMenu = ({ nav, cartCount }) => {
  return (
    <div className='navMobileMenuContainer'>
      <ul className='navMobileMenuUL'>
        {nav.map((list, index) => {
          return (
            <li className='navMobileMenuLI' key={list}>
              <Link to={`/${list}`}>{list}</Link>

              {list === "cart" ? <div className='cartNumber'>{cartCount}</div> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobileMenu;
