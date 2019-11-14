import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import IconInput from '../components/IconInput';
import POSProductCard from '../components/POSProductCard';
import '../assets/styles/ProductList.scss';

const ProductList = ({ products, history }) => (
  <section className='pos__product__list'>
    <section className='section__search'>
      <IconInput icon='fas fa-search' placeholder='Buscar Producto' />
    </section>
    <section className='product__list__container'>
      { products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <POSProductCard product={product} />
        </Link>
      ))}
    </section>
  </section>
);

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductList);
