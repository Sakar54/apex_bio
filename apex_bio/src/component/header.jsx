import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useTranslation } from "react-i18next";
import logo from "../assets/Ailogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuResources, setSubmenuResources] = useState(false);
  const [submenuAbout, setSubmenuAbout] = useState(false);

  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleResourcesSubmenu = () => {
    setSubmenuResources(!submenuResources);
  };

  const toggleAboutSubmenu = () => {
    setSubmenuAbout(!submenuAbout);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>AI Solution </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <NavLink
            to="/Home"
            element="Home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          {/* About with Submenu */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleAboutSubmenu}>
              Solution
            </button>
            <div className={`dropdown-content ${submenuAbout ? "show" : ""}`}>
              <NavLink
                to="/solution"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuAbout(false);
                }}
              >
                Agricultural
              </NavLink>
              <NavLink
                to="/SolutionSociety"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuAbout(false);
                }}
              >
                Finance
              </NavLink>
              <NavLink
                to="/InsuranceSolutions"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuAbout(false);
                }}
              >
                Insurance
              </NavLink>
              <NavLink
                to="/AutomationSolutions"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuAbout(false);
                }}
              >
                Automation
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/TestimonialsPopup"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>
          {/* About with Submenu */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleAboutSubmenu}>
              About
            </button>
            <div className={`dropdown-content ${submenuAbout ? "show" : ""}`}>
              <NavLink
                to="/Gallery"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuAbout(false);
                }}
              >
                Photo
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuAbout(false);
                }}
              >
                About Us
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>{" "}
        </nav>

        {/* Header Right Section */}
        <div className="header-right">
          {/* Language Selector */}
          <select
            className="language-select"
            onChange={(e) => handleLanguageChange(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="np">NP</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
