import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const getNavClass = ({ isActive }) =>
    isActive ? "active-link" : "";

  return (
    <header>
      <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
        
        {/* Logo */}
        <NavLink to="/" end className="logo" onClick={closeMenu}>
          <img
            className="nav-logo"
            src="/img/tipu-logo-dark-background.svg"
            alt="Website Logo"
          />
        </NavLink>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar bar1 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`bar bar2 ${isOpen ? "toggle" : ""}`}></div>
          <div className={`bar bar3 ${isOpen ? "toggle" : ""}`}></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={getNavClass}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={getNavClass}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/ourWork"
              onClick={closeMenu}
              className={getNavClass}
            >
              Our Work
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reviews"
              onClick={closeMenu}
              className={getNavClass}
            >
              Reviews
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={getNavClass}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={getNavClass}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
