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

export default {};
