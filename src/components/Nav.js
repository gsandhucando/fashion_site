import React, { useEffect, useState } from "react";
import Style from "./css/Nav.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavMobileMenu from "./NavMobileMenu";

let styles = {
  itemDisplay: {
    position: "relative",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    background: "red",
    top: "6%",
    textAlign: "center",
    color: "white",
    marginLeft: "2px"
  }
};

const Nav = ({ nav, cartCount }) => {
  let [mobile, setMobile] = useState(false);
  let [hamburger, setHambuger] = useState(false);

  let updateDimensions = () => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  let mobileNav = () => {
    setHambuger(!hamburger);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <nav className={mobile ? Style.navMobile : Style.navContiner}>
      <Link to="/">
        <h1
          className="logoName"
          style={{
            position: "absolute",
            top: 27,
            left: 30,
            fontWeight: 90,
            fontSize: 34
          }}
        >
          SONU.
        </h1>
      </Link>
      {mobile ? (
        <div onClick={mobileNav} className={Style.hamburgerContainer}>
          <div className="line1" />
          <div className="line1" />
          {hamburger ?
             <NavMobileMenu nav={nav} cartCount={cartCount} /> : null}
        </div>
      ) : (
        <ul className={Style.navUl}>
          {nav.map((list, index) => {
            return (
              <li className={Style.navLi} key={list}>
                <Link to={`/${list}`}>{list}</Link>

                {list === "cart" ? (
                  <div style={styles.itemDisplay}>{cartCount}</div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

let MapStateToProps = state => {
  return {
    cartCount: state.user ? state.user.cart.length : 0
  };
};

export default connect(MapStateToProps)(Nav);
