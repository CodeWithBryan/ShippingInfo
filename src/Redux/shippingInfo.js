import axios from 'axios';

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const REQUEST_ZIP = 'REQUEST_ZIP';
export const API_RESPONSE_ZIP = 'API_RESPONSE_ZIP';
export const API_RESPONSE_ZIP_SUCCESS = 'API_RESPONSE_ZIP_SUCCESS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS';

export function updateField(name, value) {
  return {
    type: UPDATE_FIELD,
    name,
    value
  }
}

export function updateError(name, value) {
  return {
    type: UPDATE_ERROR,
    name,
    value
  }
}

export function requestZip(value) {
  return {
    type: API_RESPONSE_ZIP,
    payload: {
      request: {
        url: `/api/address/zipcode/${value}`,
        method: 'GET',
      }
    }
  }
}

export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
    payload: {
      request: {
        url: '/api/offer/8742003',
        method: 'GET',
      }
    }
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return Object.assign({}, state, { [action.name]: action.value });
    case UPDATE_ERROR:
      return Object.assign({}, state, {
        errors: Object.assign({}, state.errors, {
          [action.name]: action.value
        })
      });
    case API_RESPONSE_ZIP_SUCCESS:
      return Object.assign({}, state, {
        state: action.payload.data.response.stateCode,
        city: action.payload.data.response.city,
      });
    case REQUEST_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        products: action.payload.data.response.mainItems
      });
    default:
      return state;
  }
}


























