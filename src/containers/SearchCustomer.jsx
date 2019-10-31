import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findCustomer } from '../actions';
import '../assets/styles/SearchCustomer.scss';

const SearchCustomer = ({ customer, findCustomer, history }) => {
  const [form, setValues] = useState({
    email: '',
    fullname: '',
    phone: '',
  });
  const handleInput = event => setValues({
    ...form,
    [event.target.name]: event.target.value,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    history.goBack();
  };

  console.log(form);

  return (
    <form className='search__customer__form' onSubmit={handleSubmit}>
      <div className='search__customer__input'>
        <input
          type='email'
          name='email'
          pattern='[^ @]*@[^ @]*'
          onChange={handleInput}
          placeholder='Correo'
          defaultValue={customer.email}
        />
        <button type='button' className='search__customer__button' onClick={() => findCustomer(form)}>
          <i className='fas fa-2x fa-search-plus' />
        </button>
      </div>
      <div className='search__customer__input'>
        <input
          type='text'
          name='fullname'
          onChange={handleInput}
          placeholder='Nombre completo'
          defaultValue={customer.fullname}
        />
      </div>
      <div className='search__customer__input'>
        <input
          type='number'
          name='phone'
          pattern='\d*'
          onChange={handleInput}
          placeholder='Teléfono'
          defaultValue={customer.phone}
        />
      </div>
      <div className='search__customer__submit'>
        <input type='submit' value='Continuar' />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    customer: state.customer,
  };
};

const mapDispatchToProps = {
  findCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCustomer);
