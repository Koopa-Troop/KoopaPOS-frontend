import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IconInput from '../../components/IconInput';
import ProductCard from '../../components/ProductCard';
import '../../assets/styles/ProductList.scss';

const POSProductList = ({ products }) => (
  <section className='pos__product__list'>
    <section className='section__search'>
      <IconInput icon='fas fa-search' placeholder='Buscar Producto' />
    </section>
    <section className='product__list__container'>
      { products.map(product => (
        <Link to={`/pos/product/${product.id}`} key={product.id}>
          <ProductCard product={product} />
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

export default connect(mapStateToProps, null)(POSProductList);
