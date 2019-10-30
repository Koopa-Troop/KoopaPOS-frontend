import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({quantity, showSearchBox}) => (
  <header className='header__application'>
    <div className='header__actions'>
      <i className='fas fa-bars' />
      <Link to='/cart' className="undecored">
        <i className='fas fa-shopping-cart'>
          {quantity > 0 &&
            <span className='icon__badge'>{quantity > 9 ? '+9' : quantity}</span>
          }
        </i>
      </Link>
    </div>
    {showSearchBox && (
      <div className='header__searchbox'>
        <div className='icon__input right'>
          <input placeholder='Buscar producto' />
          <i className='fas fa-search' />
        </div>
      </div>
    )}
  </header>
);

const mapStateToProps = (state, props) => {
  return {
    quantity: state.quantity,
  };
};

export default connect(mapStateToProps, null)(Header);

