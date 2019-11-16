import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import '../assets/styles/components/Menu.scss';

const Menu = ({ showMenu, logoutClick }) => {
  useEffect(() => {
    document.getElementsByTagName('body')[0].className = 'app__overflow__hidden';
    return () => {
      document.getElementsByTagName('body')[0].className = '';
    };
  }, []);
  return (
    <nav className='menu__sidebar'>
      <div className='menu__header'>
        <div className='menu__logo'>
          <picture className='menu__logo__picture'>
            <Logo />
          </picture>
        </div>
        <div className='menu__close__icon'>
          <i className='fas fa-times fa-2x' onClick={showMenu} role='button' tabIndex={-1} />
        </div>
      </div>
      <div className='menu__items'>
        <MenuItem to='/' strict exact icon='fas fa-store' onClick={showMenu}>Punto de Venta</MenuItem>
        <MenuItem to='/products' icon='far fa-map' onClick={showMenu}>Productos</MenuItem>
        <MenuItem to='/dashboard' icon='fas fa-chart-pie' onClick={showMenu}>Dashboard</MenuItem>
        {/*<MenuItem to='/login' icon='fas fa-user-circle' onClick={showMenu}>Cuenta</MenuItem>*/}
        <MenuItem to='/login' icon='fas fa-sign-out-alt' onClick={logoutClick}>Cerrar sesión</MenuItem>
      </div>
    </nav>
  );
};

const MenuItem = ({ to, icon, children, onClick, ...otherProps }) => {
  return (
    <NavLink
      to={to}
      onClick={() => {
        onClick();
      }}
      className='menu__item'
      activeClassName='active'
      {...otherProps}
    >
      <i className={icon} />
      {children}
    </NavLink>
  );
};

export default Menu;
