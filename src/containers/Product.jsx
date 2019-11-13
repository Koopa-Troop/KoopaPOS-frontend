import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addToCart } from '../actions';
import Button from '../components/Button';
import IconInput from '../components/IconInput';
import '../assets/styles/Product.scss';

const Product = ({ product, addToCart, history }) => {
  const [quantity, setQuantity] = useState();
  return (
    <>
      <Header />
      <section className='pos__product'>
        <section className='pos_product__item'>
          <picture className='product__item__picture'>
            <img alt={`product ${product.name}`} src={product.image} />
          </picture>
          <div className='product__item__info'>
            <div className='product__item__title'>{product.name}</div>
            <div className='product__item__footer'>
              <div className='product__item__price'>
                <span>$</span>
                {product.price}
              </div>
              <div className='product__item__availability'>{product.availability ? 'Disponible' : 'No disponible'}</div>
            </div>
          </div>
        </section>
        <section className='product__form'>
          <div className='product__form__element'>
            <IconInput
              icon='fas fa-asterisk'
              type='number'
              name='quantity'
              pattern='\d*'
              placeholder='Cantidad'
              onChange={event => setQuantity(Number(event.target.value))}
            />
          </div>
          <div className='product__form__element'>
            <Button
              type='button'
              primary
              onClick={() => {
                addToCart({ ...product, quantity });
                history.push('/');
              }}
            >
              Agregar
            </Button>
          </div>
          <div className='product__form__element'>
            <Button
              to='/'
              secondary
              outlined
            >
              Regresar
            </Button>
          </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
