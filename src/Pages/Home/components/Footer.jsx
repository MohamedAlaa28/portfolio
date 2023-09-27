import React from "react";
import footerLogo from "../../../assets/images/small_logo.png";
import "../css/_Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="footer-logo" className="footer-logo"></img>
      <section>
      <ul>
        <li>
          <p className="h3">document navigation</p>
          <Link to="/">home</Link>
          <Link to="/">about</Link>
          <Link to="/">menu</Link>
          <Link to="/">reservations</Link>
          <Link to="/">order online</Link>
          <Link to="/">login</Link>
        </li>
      </ul>
      <ul>
        <li>
          <p className="h3">contact</p>
          <Link to="/">address</Link>
          <Link to="/">phone number</Link>
          <Link to="/">email</Link>
        </li>
      </ul>
      <ul>
        <li>
          <p className="h3">social media links</p>
          <Link to="/">address</Link>
          <Link to="/">phone number</Link>
          <Link to="/">email</Link>
        </li>
      </ul>
      </section>
    </footer>
  );
};

export default Footer;
