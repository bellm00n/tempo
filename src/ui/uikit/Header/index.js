import logoImage from "assets/images/logo.svg";
import React from "react";
import "ui/uikit/Header/header.css";
import { Link } from "react-router-dom";
import * as Icons from 'ui/uikit/Icons';

const Header = () => {
  return (
    <div className="header">
      <a
          className="header__link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bellm00n/tempo"
      >
        <Icons.Github />
      </a>
      <Link to="/" className="header__logo">
        <img src={logoImage} alt="logo" className="auth__logo-image" />
        <span className="header__logo-span">Tempo</span>
      </Link>
      <button className="header__link">
        <Icons.LogOut />
      </button>
    </div>
  );
};

export default Header;
