import React, { useState } from "react";
import logo from "../icons/Logo.svg";
import "../css/_NavBar.scss";
import { AiOutlineMenu } from "react-icons/ai";
// import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const appearNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <Link to={"/"}>
        <img src={logo} alt="nav-logo" className="nav-logo" />
      </Link>
      <SearchBar className="Search-bar" />
      {navMenu ? (
        <ul className="ul-menu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              home
            </NavLink>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToSection("about");
                setNavMenu(!navMenu);
              }}
              aria-label="On Click"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToSection("main");
                setNavMenu(!navMenu);
              }}
              aria-label="On Click"
            >
              menu
            </Link>
          </li>
          <li>
            <NavLink
              to={"/booking"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/orders"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              order online
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              {/* <FaUser /> */}
              login
            </NavLink>
          </li>
        </ul>
      ) : null}

      <ul className="ul-bar">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            home
          </NavLink>
        </li>
        <li>
          <Link
            onClick={() => {
              scrollToSection("about");
              setNavMenu(!navMenu);
            }}
            aria-label="On Click"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              scrollToSection("main");
              setNavMenu(!navMenu);
            }}
            aria-label="On Click"
          >
            menu
          </Link>
        </li>
        <li>
          <NavLink
            to={"/booking"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/orders"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            order online
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            {/* <FaUser /> */}
            login
          </NavLink>
        </li>
      </ul>

      <AiOutlineMenu
        className={`menu-icon ${navMenu ? "open" : ""}`}
        onClick={appearNavMenu}
      />
    </nav>
  );
};

export default NavBar;
