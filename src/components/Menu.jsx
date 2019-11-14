import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Menu.scss';

const Menu = ({ showMenu }) => {
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
        <MenuItem to='/' icon='fas fa-store'>Punto de Venta</MenuItem>
        <MenuItem to='/login' icon='far fa-map'>Administrador</MenuItem>
        <MenuItem to='/login' icon='fas fa-chart-pie'>Dashboard</MenuItem>
        <MenuItem to='/login' icon='fas fa-user-circle'>Cuenta</MenuItem>
        <MenuItem to='/login' icon='fas fa-sign-out-alt'>Cerrar sesión</MenuItem>
      </div>
    </nav>
  );
}

const MenuItem = ({ to, icon, children }) => (
  <NavLink to={to} className='menu__item' activeClassName='active'>
    <i className={icon} />
    {children}
  </NavLink>
);

export default Menu;
