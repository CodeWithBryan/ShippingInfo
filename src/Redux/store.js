import { createStore } from 'redux';
import { reducer } from 'src/Redux/shippingInfo';

// TODO: add middleware

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
  }
};

export default function configureStore(initialState = defaultState) {
  return createStore(reducer, initialState);
}
