export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const removeToCart = payload => ({
  type: 'REMOVE_TO_CART',
  payload,
});

export default {
  addToCart,
  removeToCart,
};
