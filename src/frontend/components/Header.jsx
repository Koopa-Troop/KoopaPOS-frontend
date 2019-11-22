import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from './Logo';
import Menu from './Menu';
import HeaderOptions from './HeaderOptions';
import { showMenu, logoutSubmit } from '../actions';
import '../assets/styles/components/Header.scss';

const Header = ({ quantity, menu, showMenu, logoutSubmit }) => {
  const location = useLocation(),
    history = useHistory();
  const logoutClick = () => {
    showMenu();
    history.push('/login');
    logoutSubmit();
  };
  if (['/register', '/login', '/print'].indexOf(location.pathname) > -1) return null;
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
      {menu && <Menu showMenu={showMenu} logoutClick={logoutClick} />}
    </>
  );
};

const mapStateToProps = state => ({
  quantity: state.quantity,
  menu: state.menu,
});

const mapDispatchToProps = {
  showMenu,
  logoutSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
