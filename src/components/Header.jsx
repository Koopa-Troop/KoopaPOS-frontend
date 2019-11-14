import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './Logo';
import Menu from './Menu';
import HeaderOptions from './HeaderOptions';
import { showMenu } from '../actions';
import './Header.scss';

const Header = ({ children, quantity, menu, showMenu }) => {
  if (['/sign', '/login', '/print'].indexOf(window.location.pathname) > -1) return children;
  return (
    <>
      <header className='header__application'>
        <div className='logo'>
          <Link to='/' className='home__link'>
            <Logo />
          </Link>
        </div>
        <div className='options'>
          <HeaderOptions quantity={quantity} showMenu={showMenu} />
        </div>
      </header>
      {children}
      {menu && <Menu showMenu={showMenu} />}
    </>
  );
}

const mapStateToProps = state => ({
  quantity: state.quantity,
  menu: state.menu,
});

const mapDispatchToProps = {
  showMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
