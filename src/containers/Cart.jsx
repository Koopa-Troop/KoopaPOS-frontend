import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { removeToCart } from '../actions';
import '../assets/styles/Cart.scss';

const Cart = ({ quantity, total, cart, removeToCart }) => (
  <>
    <Header />
    <section className='cart__product__pay'>
      <div className='cart__product__total'>
        Subtotal (
        {quantity}
        productos) &nbsp;
        <span>
          $
          {total}
        </span>
      </div>
      <div className='cart__product__button'>
        <Link to='/checkout' className='checkout__button'>
          Pagar
        </Link>
      </div>
    </section>
    <section className='cart__product__list'>
      {
        cart.map(product => (
          <div className='product__item' key={product.id}>
            <div className='product__item__info'>
              <picture>
                <img src={product.image} alt={`Product ${product.name}`} />
              </picture>
              <div>
                <div className='name'>
                  {product.name}
                </div>
                <div className='price'>
                  $
                  {product.price}
                </div>
              </div>
            </div>
            <div className='product__item__cart'>
              <input
                type='number'
                name='quantity'
                pattern='\d*'
                placeholder='Cantidad'
                onChange={event => setQuantity(Number(event.target.value))}
                defaultValue={product.quantity}
              />
              <button
                type='button'
                onClick={() => {
                  removeToCart(product);
                }}
              >
                  Eliminar
              </button>
            </div>
          </div>
        ))
      }
    </section>
  </>
);

const mapStateToProps = (state) => {
  console.log(state.cart);
  return {
    cart: state.cart,
    quantity: state.quantity,
    total: state.total,
  };
};

const mapDispatchToProps = {
  removeToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
