import React from 'react';
import className from 'classnames';
import IconInput from './IconInput';
import Button from './Button';
import './POSProductCard.scss';

const POSProductCard = ({ product, checkout, onChangeCheckout, removeToCart }) => {
  const productCardClassName = className('pos__product__card', {
    checkout,
  });
  return (
    <section className={productCardClassName}>
      <div className='product__item'>
        <picture className='product__item__image'>
          <img src={product.image} alt='imagen del producto' />
        </picture>
        <div className='product__item__info'>
          <div className='product__item__title'>{product.name}</div>
          <div className='product__item__footer'>
            <div className='product__item__price'>
              <span>$</span>
              {product.price}
            </div>
            {
              checkout && (
                <div className='product__item__checkout'>
                  <div className='product__item__checkout__quantity'>
                    <IconInput
                      defaultValue={product.quantity}
                      onChange={onChangeCheckout}
                      size='small'
                      type='number'
                      name='quantity'
                      pattern='\d*'
                    />
                  </div>
                  <div className='product__item__checkout__trash'>
                    <Button secondary onClick={removeToCart} size='small'>Eliminar</Button>
                  </div>
                </div>
              )
            }
            {/*<div className='product__item__availability'>{product.availability ? 'Disponible' : 'No disponible'}</div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default POSProductCard;
