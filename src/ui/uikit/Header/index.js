import logoImage from 'assets/images/logo.svg';
import React from 'react';
import 'ui/uikit/Header/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className="header">
        <Link to="/" className="header__logo">
          <img src={logoImage} alt="logo" className="auth__logo-image"/>
          <span className="header__logo-span">Tempo</span>
        </Link>
      </div>
  )
}

export default Header;