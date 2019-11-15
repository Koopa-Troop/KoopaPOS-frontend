import React, { useState } from 'react';
import { connect } from 'react-redux';
import IconInput from '../../components/IconInput';
import Button from '../../components/Button';
import { resetCart } from '../../actions';

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
      history.push('/pos/print');
    }
  };

  return (
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
          <IconInput
            icon='far fa-money-bill-alt'
            placeholder='Pago'
            type='number'
            pattern='\d*'
            onChange={event => changePay(Number(event.target.value))}
          />
          <div className='cart__products__pay__exchange'>
            Cambio: &nbsp;
            {exChange.toFixed(2)}
          </div>
          {customerHasBeenSelected && (
            <div className='cart__customer__info'>
              Cliente:&nbsp;
              <span>{customer.fullname}</span>
            </div>
          )}
        </div>
        { !customerHasBeenSelected && (
          <div className='cart__product__control'>
            <Button to='/pos/search-customer' primary outlined>Buscar Cliente</Button>
          </div>
        )}
        <div className='cart__product__control'>
          <Button onClick={handlePay} primary>Continuar</Button>
        </div>
        <div className='cart__product__control'>
          <Button to='/' secondary outlined>Regresar</Button>
        </div>
      </section>
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
