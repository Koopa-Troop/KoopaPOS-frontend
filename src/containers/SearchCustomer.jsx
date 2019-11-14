import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findCustomer } from '../actions';
import '../assets/styles/SearchCustomer.scss';
import IconInput from '../components/IconInput';
import Button from '../components/Button';
import Header from '../components/Header';

const SearchCustomer = ({ customer, findCustomer, history }) => {
  const [form, setValues] = useState({
    email: '',
    fullname: '',
    phone: '',
    search: '',
  });
  const handleInput = event => setValues({
    ...form,
    [event.target.name]: event.target.value,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <section className='pos__search__customer'>
      <form className='search__customer__form' onSubmit={handleSubmit}>
        <div className='search__customer__input'>
          <IconInput
            type='email'
            name='search'
            pattern='[^ @]*@[^ @]*'
            onChange={handleInput}
            placeholder='Buscar por correo'
          />
          <Button
            primary
            outlined
            onClick={ e => {
              e.preventDefault();
              findCustomer(form.search)
            }}
          >
            Buscar cliente
          </Button>
          <IconInput
            type='email'
            name='email'
            pattern='[^ @]*@[^ @]*'
            onChange={handleInput}
            placeholder='Correo'
            defaultValue={customer.email}
          />
          <IconInput
            type='text'
            name='fullname'
            onChange={handleInput}
            placeholder='Nombre completo'
            defaultValue={customer.fullname}
          />
          <IconInput
            type='number'
            name='phone'
            pattern='\d*'
            onChange={handleInput}
            placeholder='Teléfono'
            defaultValue={customer.phone}
          />
          <Button primary type='submit'>Buscar cliente</Button>
        </div>
      </form>
    </section>
  )
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
