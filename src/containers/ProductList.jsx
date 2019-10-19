import React from 'react';
import Header from '../components/Header';
import '../assets/styles/ProductList.scss';

const products = [
  {
    id: 1,
    name: 'Adult Large Breed',
    image: 'https://www.eukanuba.com.mx/40-thickbox_default/adult-large-breed.jpg',
    price: 1.52,
    availability: true,
  },{
    id: 2,
    name: 'Adult Medium Breed',
    image: 'https://www.eukanuba.com.mx/37-home_default/adult-medium-breed.jpg',
    price: 1.52,
    availability: true,
  }, {
    id: 3,
    name: 'Adult Small Breed',
    image: 'https://www.eukanuba.com.mx/36-home_default/adult-small-breed.jpg',
    price: 1.52,
    availability: true,
  }, {
    id: 4,
    name: 'Healthy Extras Adult Medium & Large Breed',
    image: 'https://www.eukanuba.com.mx/53-home_default/healthy-extras-adult-medium-large-breed.jpg',
    price: 1.52,
    availability: true,
  }, {
    id: 5,
    name : 'Healthy Extras Adult Small Breed',
    image: 'https://www.eukanuba.com.mx/52-home_default/healthy-extras-adult-small-breed.jpg',
    price: 1.52,
    availability: true,
  }, {
    id: 6,
    name: 'Healthy Extras Puppy',
    image: 'https://www.eukanuba.com.mx/51-home_default/healthy-extras-puppy.jpg',
    price: 1.52,
    availability: true,
  },
]

const ProductList = () => (
  <>
    <Header />
    <section className='product__list__search'></section>
    <section className='product__list_container'>
      {
        products.map(product => (
          <div className='product__item' key={product.id}>
            <div className='product__item__image' style={{backgroundImage: `url(${product.image})`}}>
            </div>
            <div className='product__item__info'>
              <div className='product__item__title'>
                {product.name}
              </div>
              <div className='product__item__brand'>
                {product.name}
              </div>
              <div className='productt__item__footer'>
                <div className='product__item__price'>
                  ${product.price}
                </div>
                <div className='product__item__availability'>
                  {product.availability ? 'Disponible' : 'No disponible'}
                </div>
              </div>
            </div>
            <div id='borderLeft'>

            </div>
          </div>
        ))
      }
    </section>
  </>
);

export default ProductList;
