import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Options = ({ quantity }) => (
  <>
    <Link to='/cart' className='undecored'>
      <i className='fas fa-shopping-cart'>
        <span className='icon__badge'>{quantity > 9 ? '+9' : quantity}</span>
      </i>
    </Link>
    <i className='fas fa-bars' />
  </>
);

const mapStateToProps = state => ({
  quantity: state.quantity,
})

export default connect(mapStateToProps, null)(Options);
