import classNames from 'classnames';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const NavLink = ({children, to, activeOnlyWhenExact}) => {
  let match = useRouteMatch({
    path: to,
    exact: true
  });

  const navLinkClasses = classNames({
    'menu__link': true,
    'menu__link--active': match
  })

  return (
      <Link className={navLinkClasses} to={to}>{children}</Link>
  )
}

export default NavLink;