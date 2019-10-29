import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../assets/styles/ProductList.scss';

const ProductList = ({ products, history }) => (
  <>
    <Header showSearchBox />
    <section className='product__list_container'>
      {
        products.map((product, key) => (
          <div
            className='product__item'
            key={product.id}
            role='link'
            tabIndex={100 + key}
            onClick={() => { history.push(`/product/${product.id}`); }}
          >
            <div className='product__item__image' style={{ backgroundImage: `url(${product.image})` }} />
            <div className='product__item__info'>
              <div className='product__item__title'>
                {product.name}
              </div>
              <div className='product__item__brand'>
                {product.name}
              </div>
              <div className='productt__item__footer'>
                <div className='product__item__price'>
                  {`$${product.price}`}
                </div>
                <div className='product__item__availability'>
                  {product.availability ? 'Disponible' : 'No disponible'}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  </>
);

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};


export default connect(mapStateToProps, null)(ProductList);
