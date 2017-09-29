import { createStore, applyMiddleware } from 'redux';
import { reducer } from 'src/Redux/shippingInfo';
import axiosMiddleware from 'redux-axios';

const clients = {
  default: {
    axios: {
      baseURL: 'https://www.wsjwine.com/',
      responseType: 'json',
    }
  }
};

const defaultState = {
  residential: true,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  emailConfirm: '',
  address: '',
  secondAddress: '',
  state: '',
  city: '',
  zipcode: '',
  submitted: false,
  errors: {
    residential: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    company: false,
    emailConfirm: false,
    address: false,
    secondAddress: false,
    state: false,
    city: false,
    zipcode: false,
    errorCount: 0,
  },
  products: [],
};

export default function configureStore(initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(
      axiosMiddleware(clients)
    )
  );
};
