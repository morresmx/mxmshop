import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiMenuAltRight, BiX, BiCart } from "react-icons/bi";
import "./navbar.css";

import logoImage from "../assets/other/logo.png";

export const Navbar = () => {
  const location = useLocation();
  const [header, setHeader] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1060);

  const navigate = useNavigate();

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1060);
      setMobileMenuOpen(false);
    };

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${header ? "topHeader" : "scrollHeader"}`}>
      <nav>
        {isDesktop ? (
          <div className="navbar-desktop">
            <div><img className="logo" src={logoImage} alt="" onClick={() => navigate("/")}/></div>
            <div className="nav-buttons">
              <ul className="menu">
                <li
                  className={`menu-item ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <Link to="/">Stone Island</Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname === "/projects" ? "active" : ""
                  }`}
                >
                  <Link to="/projects">CONTACT</Link>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <Link to="/cart">
                    <BiCart size={36} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-mobile">
            <div><img className="logo" src={logoImage} alt="" onClick={() => navigate("/")}/></div>
            <div>
              <div>
                <Link
                  to="/cart"
                  className={`cart-mobile ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <BiCart size={30} />
                </Link>
              </div>
              <div className="open-icon" onClick={() => toggleMobileMenu()}>
                <BiMenuAltRight size={30} />
              </div>
            </div>

            {isMobileMenuOpen && (
              <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                <Link
                  to="/cart"
                  className={`cart-mobile ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <BiCart size={30} />
                </Link>
                <div className="close-icon" onClick={toggleMobileMenu}>
                  <BiX size={30} />
                </div>
                <ul>
                  <li
                    onClick={toggleMobileMenu}
                    className={`mobile-menu-item ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    onClick={toggleMobileMenu}
                    className={`mobile-menu-item ${
                      location.pathname === "/projects" ? "active" : ""
                    }`}
                  >
                    <Link to="/projects">My Projects</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
