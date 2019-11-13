import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import HeaderOptions from './HeaderOptions';
import './Header.scss';

const Header = () => (
  <header className='header__application'>
    <div className='logo'>
      <Link to='/' className='home__link'>
        <Logo />
      </Link>
    </div>
    <div className='options'><HeaderOptions /></div>
  </header>
);

export default Header;

