import React from 'react';
import './Header.scss';

const Header = () => (
  <header className='header__application'>
    <div className='header__actions'>
      <i class="fas fa-bars" />
      <i className='fas fa-shopping-cart' />
    </div>
    <div className='header__searchbox'>
      <div className="icon__input right">
        <input placeholder='Buscar producto' />
        <i className='fas fa-search' />
      </div>
    </div>
  </header>
);

export default Header;
