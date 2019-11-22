const initial = {
  user: {},
  menu: false,
  search: '',
  quantity: 0,
  total: 0,
  customer: {},
  cart: [],
  products: [],
  customers: [
    {
      fullname: 'Jocelyn Hernández',
      phone: '9999999999',
      email: 'email@abc.com',
    },
  ],
};

const initialState = (init = {}) => (Object.assign(initial, init));

export default initialState;
