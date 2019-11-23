import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import IconInput from '../components/IconInput';
import FileInput from '../components/FileInput';
import Button from '../components/Button';
import { createProductRequest, updateProduct } from '../actions';
import '../assets/styles/ProductForm.scss';

const ProductForm = ({ history, createProduct, updateProduct, product }) => {
  const defaultPreview = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  const [form, setValues] = useState({
    name: product ? product.name : '',
    price: product ? product.price : '',
    image: product ? product.image : '',
    preview: product ? product.image : defaultPreview,
  });
  const handleInput = event => setValues({
    ...form,
    [event.target.name]: event.target.value,
  });

  const handleImage = (event) => {
    if (event.currentTarget.files.length > 0) {
      const file = event.currentTarget.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setValues({
          ...form,
          preview: e.target.result,
          image: file,
        });
      };
      console.log(form);
      reader.readAsDataURL(file);
    } else {
      setValues({
        ...form,
        image: '',
        preview: defaultPreview,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { preview, ...data } = form;
    if (product) {
      updateProduct({
        id: product.id,
        ...data,
      }, history);
    } else {
      createProduct({
        id: uuidv4(),
        availability: true,
        ...data,
      }, history);
    }
  };
  return (
    <form className='product__form' onSubmit={handleSubmit}>
      <div className='product__form__image'>
        <div className='product__form__picture'>
          <picture>
            <img
              src={form.preview}
              alt='Sample pic'
            />
          </picture>
        </div>
        <FileInput name='image' onChange={handleImage} />
      </div>
      <div className='product__form__inputs'>
        <textarea
          name='name'
          onChange={handleInput}
          defaultValue={form.name}
        />
        <IconInput
          icon='far fa-money-bill-alt'
          placeholder='Costo'
          type='number'
          pattern='\d*'
          name='price'
          onChange={handleInput}
          defaultValue={form.price}
        />
      </div>
      <div className='product__form__buttons'>
        <Button secondary outlined to='/products'>Regresar</Button>
        <Button primary type='submit'>Guardar</Button>
      </div>
    </form>
  );
};

const mapStateToProps = (state, props) => {
  const hasProduct = Object.keys(props.match.params).length > 0;
  return ({
    product: hasProduct ? state.products.find(product => product._id === props.match.params.id) : null,
  });
};

const mapDispatchToProps = {
  createProduct: createProductRequest,
  updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
