const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { cart } = state;
      let { quantity, total } = state;
      const productIndex = cart.findIndex(product => product.id === action.payload.id);
      total += action.payload.quantity * action.payload.price;

      if (productIndex === -1) {
        quantity += action.payload.quantity;
        return ({
          ...state,
          quantity,
          total,
          cart: [...state.cart, action.payload],
        });
      }
      quantity += action.payload.quantity;
      cart[productIndex].quantity += action.payload.quantity;
      return ({
        ...state,
        quantity,
        cart,
        total,
      });
    }
    case 'REMOVE_TO_CART': {
      const { cart, quantity, total } = state;
      const productIndex = cart.findIndex(product => product.id === action.payload.id);
      const removed = cart.splice(productIndex, 1);
      return ({
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id),
        quantity: quantity - removed[0].quantity,
        total: total - (removed[0].quantity * removed[0].price),
      });
    }
    default:
      return state;
  }
};

export default reducer;
