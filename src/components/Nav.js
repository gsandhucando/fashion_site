import React, { useEffect, useState } from "react";
import Style from "./css/Nav.module.css";
import { Link } from "react-router-dom";

let styles= {
  itemDisplay: {
    position: 'absolute',
    height: '25px',
    width: '25px',
    borderRadius: '50%',
    background: 'red',
    top: '6%',
    right: '14%',
    textAlign: 'center',
    color: 'white'
  }
}

const Nav = ({nav}, props) => {
  let [mobile, setMobile] = useState(false);

  console.log(props, 'nav')

  let updateDimensions = () => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <nav className={mobile ? Style.navMobile : Style.navContiner}>
            <div style={styles.itemDisplay}>1</div>

      <Link to='/'>
      <h1 style={{position: 'absolute',top: 27 ,left: 30, fontWeight: 90, fontSize: 34}}>SONU.</h1>
      </Link>
      { mobile ? <div className={Style.hamburgerContainer}>
        <div className='line1'></div>
        <div className='line1'></div>
      </div> :
      <ul className={Style.navUl}>
        {nav.map((list, index) => {
          return (

          <li className={Style.navLi} key={list}><Link to={`/${list}`}>{list}</Link></li>);
        })}
      </ul>
      }

    </nav>
  );
};

export default Nav;
