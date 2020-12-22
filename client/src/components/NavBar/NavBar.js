import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { IconContext } from "react-icons/lib";
import "./NavBar.scss";
import axios from "axios";
import { GlobalContext } from "../../context/reducers/globalReducer";
import {
  setToken,
  setUsername,
  userLogout,
} from "../../context/actions/globalActions";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { height, width } = useWindowDimensions();

  const [{ username }, dispatchToGlobal] = useContext(GlobalContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const buttonSize = () => {
      if (width <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
    buttonSize();
    window.addEventListener("resize", buttonSize);
    return () => {
      window.removeEventListener("resize", buttonSize);
    };
  }, [width, height]);

  const handleLogout = async () => {
    dispatchToGlobal(userLogout());
    dispatchToGlobal(setToken(""));
    dispatchToGlobal(setUsername(""));
  };

  const showButton = () => {
    if (!username && button) {
      return (
        <Link to="/sign-up" className="btn-link">
          <Button buttonStyle="btn--outline">SIGN UP</Button>
        </Link>
      );
    } else if (!username && !button) {
      return (
        <Link to="/sign-up" className="btn-link">
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--mobile"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Button>
        </Link>
      );
    } else {
      return (
        <Link
          to="/"
          className="nav-links"
          onClick={(closeMobileMenu, handleLogout)}
        >
          logout
        </Link>
      );
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdWork className="navbar-icon" />
              W2W
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
                  Features
                </Link>
              </li>
              <li className="nav-item">
                {username ? (
                  <Link
                    to="/profile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {username}
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                )}
              </li>
              <li className="nav-btn">{showButton()}</li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
