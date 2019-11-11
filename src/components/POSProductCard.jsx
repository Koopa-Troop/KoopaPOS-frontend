import React from 'react';
import './POSProductCard.scss';

const POSProductCard = ({ product }) => (
  <section className='pos__product__card'>
    <div className='product__item'>
      <div className='product__item__image'>
        <img src={product.image} alt='imagen del producto' />
      </div>
      <div className='product__item__info'>
        <div className='product__item__title'>{product.name}</div>
        <div className='product__item__footer'>
          <div className='product__item__price'>
            <span>$</span>
            {product.price}
          </div>
          <div className='product__item__availability'>{product.availability ? 'Disponible' : 'No disponible'}</div>
        </div>
      </div>
    </div>
  </section>
);

export default POSProductCard;
