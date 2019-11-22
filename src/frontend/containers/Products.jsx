import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IconInput from '../components/IconInput';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

const Products = ({ products }) => (
  <section className='pos__product__list'>
    <section className='section__search'>
      <IconInput icon='fas fa-search' placeholder='Buscar Producto' />
    </section>
    <section className='section__add__product'>
      <Button primary to='/product/create'>Agregar producto</Button>
    </section>
    <section className='product__list__container'>
      { products.map(product => (
        <Link to={`/product/${product._id}/edit`} key={product._id}>
          <ProductCard product={product} hideAvailability />
        </Link>
      ))}
    </section>
  </section>
);

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(Products);
