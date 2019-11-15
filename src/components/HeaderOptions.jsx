import React from 'react';
import { Link } from 'react-router-dom';

const HeaderOptions = ({ quantity, showMenu }) => {
  return (
    <>
      <Link to='/pos/cart' className='undecored'>
        <i className='fas fa-shopping-cart'>
          <span className='icon__badge'>{quantity > 9 ? '+9' : quantity}</span>
        </i>
      </Link>
      <i className='fas fa-bars' onClick={showMenu} role='button' tabIndex={-1} />
    </>
  );
};

export default HeaderOptions;
