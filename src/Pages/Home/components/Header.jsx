import React from "react";
import headerLogo from "../../../assets/images/compressed/restauranfood-min.jpg";
import "../css/_Header.scss";
import { Link } from "react-router-dom";
import Button from "../../../assets/components/Button";
import LazyLoad from "react-lazyload";

const Header = () => {
  return (
    <header className="header">
      <article>
        <p className="h1">little lemon</p>
        <p className="h3">egypt</p>
        <p className="p">
          We re family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to={"/booking"}>
          <Button
            text={
              <>
                reserve <span> a</span> table
              </>
            }
          />
        </Link>
      </article>
      <LazyLoad>
        <img src={headerLogo} alt="header-logo" className="header-logo"></img>
      </LazyLoad>
    </header>
  );
};

export default Header;
