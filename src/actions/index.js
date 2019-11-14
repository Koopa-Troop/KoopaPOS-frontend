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

export default {
  addToCart,
  removeToCart,
  setQuantityToProductCart,
  findCustomer,
  resetCart,
};
