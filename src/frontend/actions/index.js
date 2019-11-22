import axios from 'axios';
import getCookie from '../utils/getCookie';

export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const removeToCart = payload => ({
  type: 'REMOVE_TO_CART',
  payload,
});

export const setQuantityToProductCart = payload => ({
  type: 'SET_QUANTITY_TO_PRODUCT_CART',
  payload,
});

export const findCustomer = payload => ({
  type: 'FIND_CUSTOMER',
  payload,
});

export const resetCart = () => ({
  type: 'RESET_CART',
});

export const showMenu = () => ({
  type: 'SHOW_MENU',
});

export const loginSubmit = payload => ({
  type: 'LOGIN_SUBMIT',
  payload,
});

export const logoutSubmit = () => ({
  type: 'LOGOUT_SUBMIT',
});

export const createProduct = payload => ({
  type: 'CREATE_PRODUCT',
  payload,
});

export const updateProduct = payload => ({
  type: 'UPDATE_PRODUCT',
  payload,
});

const setProductList = payload => ({
  type: 'SET_PRODUCT_LIST',
  payload,
});

export const loginRequest = ({ email, password }, history) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        console.log(1);
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;

        dispatch(loginSubmit({ ...data }));
        history.push('/');
      })
      .catch((err) => { console.log(err); });
  };
};

export const getProducts = () => {
  return (dispatch) => {
    axios.get(`${process.frontend.env.API_URL}/api/products`, {
      headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
      },
    }).then(({ data }) => {
      dispatch(setProductList(data));
    });
  };
};

export const createProductRequest = (payload, history) => {
  return (dispatch) => {
    console.log(payload);
    const formData = new FormData();
    // eslint-disable-next-line no-restricted-syntax
    for (const key in payload) {
      formData.append(key, payload[key]);
    }
    axios.post(`${process.frontend.env.API_URL}/api/products`, formData, {
      headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    }).then(({ data }) => {
      dispatch(createProduct(data));
      history.push('/products');
    });
  };
};
export default {};
