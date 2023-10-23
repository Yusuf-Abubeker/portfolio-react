import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Ylogo from "../../assets/y-logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
const navigate = useNavigate()
  return (
    <nav className={`nav-bar ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-container">
        <img src={Ylogo} alt="logo" className="logo" onClick={()=> navigate('/')}/>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to='/about'  onClick={toggleMenu}>
              <FontAwesomeIcon icon={faUser} /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
