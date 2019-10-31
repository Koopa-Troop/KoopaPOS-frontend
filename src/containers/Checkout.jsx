import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IconInput from '../components/IconInput';
import { resetCart } from '../actions';
import '../assets/styles/Checkout.scss';

const Checkout = ({ quantity, total, customer, history, resetCart }) => {
  const [pay = 0, changePay] = useState();
  const exChange = (pay <= total) ? 0 : pay - total;
  const customerHasBeenSelected = Object.keys(customer).length > 0;

  const handlePay = (event) => {
    if (pay < total) {
      event.preventDefault();
      console.log('validation');
    } else {
      resetCart();
      history.push('/');
    }
  };

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
      { customerHasBeenSelected &&
        <div className='checkout__products__pay__customer'>{customer.fullname}</div>
      }
      <div className='checkout__products__pay__actions'>
        { !customerHasBeenSelected && (
          <Link to='/search-customer' className='undecored'>
            <div className='link__button'>Buscar Cliente</div>
          </Link>
        )}
        <Link to='/' className='undecored'>
          <div className='link__button'>Cancelar</div>
        </Link>
        <div onClick={handlePay} role='link' tabIndex={0}>
          <div className='link__button'>Continuar</div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    quantity: state.quantity,
    total: state.total,
    customer: state.customer,
  };
};

const mapDispatchToProps = {
  resetCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
