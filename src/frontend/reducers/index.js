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
    case 'SET_QUANTITY_TO_PRODUCT_CART': {
      const { cart, quantity, total } = state;
      const productIndex = cart.findIndex(product => product.id === action.payload.id);
      const removed = JSON.parse(JSON.stringify(cart[productIndex]));
      cart[productIndex].quantity = action.payload.quantity;
      return ({
        ...state,
        cart,
        quantity: quantity - removed.quantity + action.payload.quantity,
        total: total - (removed.quantity * removed.price) + (action.payload.quantity * action.payload.price),
      });
    }
    case 'FIND_CUSTOMER': {
      const customer = state.customers.find(customer => customer.email === action.payload);
      return ({
        ...state,
        customer,
      });
    }
    case 'RESET_CART':
      return ({
        ...state,
        customer: {},
        cart: [],
        quantity: 0,
        total: 0,
      });
    case 'SHOW_MENU':
      return ({
        ...state,
        menu: !state.menu,
      });
    case 'LOGIN_SUBMIT':
      return ({
        ...state,
        user: action.payload,
      });
    case 'LOGOUT_SUBMIT':
      return ({
        ...state,
        user: {},
      });
    case 'CREATE_PRODUCT':
      return ({
        ...state,
        products: [...state.products, action.payload],
      });
    case 'UPDATE_PRODUCT': {
      const { products } = state;
      const productIndex = products.findIndex(product => product.id === action.payload.id);
      const updatedProducts = [
        ...products,
      ];
      updatedProducts[productIndex] = action.payload;
      return ({
        ...state,
        products: [...updatedProducts],
      });
    }
    case 'SET_PRODUCT_LIST':
      return ({
        ...state,
        products: action.payload,
      })
    default:
      return state;
  }
};

export default reducer;
