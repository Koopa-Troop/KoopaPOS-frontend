import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IconInput from '../components/IconInput';
import '../assets/styles/Checkout.scss';

const Checkout = ({ quantity, total }) => {
  const [pay = 0, changePay] = useState();
  console.log('pay', pay);
  const exChange = (pay <= total) ? 0 : pay - total;
  console.log('exchange', exChange);
  return (
    <section className='checkout__products'>
      <div className='checkout__products__total'>
        Subtotal (
        {quantity}
        productos) &nbsp;
        <span>
          $
          {total}
        </span>
      </div>
      <div className='checkout__products__pay__control'>
        <IconInput
          icon='far fa-money-bill-alt'
          placeholder='Pago'
          type='number'
          pattern='\d*'
          onChange={event => changePay(Number(event.target.value))}
        />
      </div>
      <div className='checkout__products__pay__exchange'>
        Cambio: &nbsp;
        {exChange.toFixed(2)}
      </div>
      <div className='checkout__products__pay__actions'>
        <Link to='/' className='undecored'>
          <div className='link__button'>Buscar Cliente</div>
        </Link>
        <Link to='/' className='undecored'>
          <div className='link__button'>Cancelar</div>
        </Link>
        <Link
          to='/'
          className='undecored'
          onClick={(e) => {
            if (pay < total) {
              e.preventDefault();
              console.log('validation');
            }
          }}
        >
          <div className='link__button'>Continuar</div>
        </Link>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state.cart);
  return {
    quantity: state.quantity,
    total: state.total,
  };
};

export default connect(mapStateToProps, null)(Checkout);
