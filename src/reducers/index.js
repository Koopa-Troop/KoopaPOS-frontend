const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { cart } = state;
      let { quantity } = state;
      const productIndex = cart.findIndex(product => product.id === action.payload.id);

      if (productIndex === -1) {
        quantity += action.payload.quantity;
        return ({
          ...state,
          quantity,
          cart: [...state.cart, action.payload],
        });
      }
      quantity += action.payload.quantity;
      cart[productIndex].quantity += action.payload.quantity;
      return ({
        ...state,
        quantity,
        cart,
      });
    }
    default:
      return state;
  }
};

export default reducer;
