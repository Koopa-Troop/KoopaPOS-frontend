import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';
import POSProductCard from '../components/POSProductCard';
import { removeToCart, setQuantityToProductCart } from '../actions';
import '../assets/styles/Cart.scss';

const Cart = ({ quantity, total, cart, removeToCart, setQuantity }) => (
  <section className='pos__cart'>
    <section className='cart__product__pay'>
      <div className='cart__product__total'>
        <div>
          Subtotal (
          {quantity}
          productos) &nbsp;
          <span>
            $
            {total.toFixed(2)}
          </span>
        </div>
      </div>
      <div className='cart__product__control'>
        <Button to='/checkout' primary>
          Pagar
        </Button>
      </div>
      <div className='cart__product__control'>
        <Button to='/' secondary outlined>
          Regresar
        </Button>
      </div>
    </section>
    <section className='cart__product__list'>
      {cart.map(product => (
        <POSProductCard
          checkout
          key={product.id}
          product={product}
          onChangeCheckout={event => setQuantity({
            ...product,
            quantity: Number(event.target.value),
          })}
          removeToCart={removeToCart}
        />
      ))}
    </section>
  </section>
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
  setQuantity: setQuantityToProductCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
