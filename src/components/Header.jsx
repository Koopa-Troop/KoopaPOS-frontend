import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconInput from './IconInput';
import Logo from './Logo';
import Options from './Options';
import './Header.scss';

const Header = () => (
  <header className='header__application'>
    <div className='logo'> <Logo/> </div>
    <div className='options'> <Options/> </div>
  </header>
);

export default Header;

