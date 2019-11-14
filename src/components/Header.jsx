import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HeaderOptions from './HeaderOptions';
import './Header.scss';

const Header = ({ children }) => {
  if (['/sign', '/login', '/print'].indexOf(window.location.pathname) > -1) return children;
  return (
    <>
      <header className='header__application'>
        <div className='logo'>
          <Link to='/' className='home__link'>
            <Logo />
          </Link>
        </div>
        <div className='options'><HeaderOptions /></div>
      </header>
      {children}
    </>
  );
}

export default Header;

