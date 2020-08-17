import React from 'react';
import 'ui/uikit/Menu/menu.css';
import paths from 'constants/paths';
import * as Icons from 'ui/uikit/Icons';
import NavLink from "ui/uikit/Menu/NavLink"

const Menu = () => {
  const navList = [
    {path: paths.projects, Icon: Icons.Projects},
    {path: paths.projects + '/test-counter', Icon: Icons.Timer},
    {path: paths.account, Icon: Icons.Account},
  ]


  return (
      <div className="menu">
        <nav className="menu__nav">
          {navList.map(({path, Icon}, index) => (
              <NavLink className="menu__link" key={`nav-link-${index}`} to={path}><Icon/></NavLink>
          ))}
        </nav>
        <div className="menu__additional">
          <a  className="menu__link" target='_blank' href='https://github.com/bellm00n/tempo'><Icons.Github/></a>
          <button className="menu__link" ><Icons.LogOut/></button>
        </div>
      </div>
  )
}

export default Menu;