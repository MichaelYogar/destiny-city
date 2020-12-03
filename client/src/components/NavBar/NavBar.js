import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { IconContext } from "react-icons/lib";
import "./NavBar.scss";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { height, width } = useWindowDimensions();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showButton = () => {
      if (width <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, [width, height]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdWork className="navbar-icon" />
              WhereToWork
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Featured
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
