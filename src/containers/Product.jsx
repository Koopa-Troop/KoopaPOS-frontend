import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addToCart } from '../actions';
import '../assets/styles/Product.scss';

const ProductList = ({ product, addToCart, history }) => {
  const [quantity, setQuantity] = useState();

  return (
    <>
      <Header />
      <section className='product__item'>
        <picture className='product__item__picture'>
          <img alt={`product ${product.name}`} src={product.image} />
        </picture>
        <div className='product__item__info'>
          <div className='name'>
            {product.name}
          </div>
          <div className='price'>
            $
            {product.price}
          </div>
          <div className='availability'>
            {product.availability ? 'Available' : 'Not Available'}
          </div>
        </div>
      </section>
      <section className='product__form'>
        <input
          type='number'
          name='quantity'
          pattern='\d*'
          placeholder='Cantidad'
          onChange={event => setQuantity(Number(event.target.value))}
        />
        <button
          type='button'
          onClick={() => {
            addToCart({ ...product, quantity });
            history.push('/');
          }}
        >
            Agregar
        </button>
      </section>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    product: state.products.find(product => product.id === props.match.params.id),
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
