export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const removeToCart = payload => ({
  type: 'REMOVE_TO_CART',
  payload,
});

export const findCustomer = payload => ({
  type: 'FIND_CUSTOMER',
  payload,
});

export const resetCart = () => ({
  type: 'RESET_CART',
});

export default {
  addToCart,
  removeToCart,
  findCustomer,
  resetCart,
};
