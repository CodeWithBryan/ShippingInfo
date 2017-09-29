import axios from 'axios';

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const UPDATE_ERRORS = 'UPDATE_ERRORS';
export const REQUEST_ZIP = 'REQUEST_ZIP';
export const API_RESPONSE_ZIP = 'API_RESPONSE_ZIP';
export const API_RESPONSE_ZIP_SUCCESS = 'API_RESPONSE_ZIP_SUCCESS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS';
export const SUBMIT_COMPLETE = 'SUBMIT_COMPLETE';

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

export function isEmailInvalid(value) {
  const emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  return (value.length < 1 || !emailRegex.test(value));
}

export function isPhoneInvalid(value) {
  return (value.length !== 10);
}

export function isStateInvalid(value) {
  return value === '';
}

export function isTextInvalid(value) {
  return value.length < 1;
}

export function isZipcodeInvalid(value) {
  const zip = /^\d{5}(-\d{4})?$/;
  return value.length !== 5 || !zip.test(value);
}

export function validateField(fieldType, name, value) {
  const error = {
    type: UPDATE_ERROR,
    name,
    value: true
  };
  const noError = {
    type: UPDATE_ERROR,
    name,
    value: false
  };

  switch (fieldType) {
    case 'Email':
      if (isEmailInvalid(value)) {
        return error;
      }
      return noError;

    case 'Phone':
      if (isPhoneInvalid(value)) {
        return error;
      }
      return noError;

    case 'State':
      if (isStateInvalid(value)) {
        return error;
      }
      return noError;

    case 'Text':
      if (isTextInvalid(value)) {
        return error;
      }
      return noError;

    case 'Zipcode':
      if (isZipcodeInvalid(value)) {
        return error;
      }
      return noError;

    default:
      break;
  }
}

// There are way better ways to do this, but I don't have the time to refactor this
// I'm extremely unhappy with how this turned out, you should never do it this way... :(
// A better way would be to store the field type (text, zipcode, etc) in the redux state,
// then simply run it like we do above, that way redux doesn't know the list of fields here
export function validateAllFields(data) {

  let errors = Object.entries(data).map((item) => {
    let isInvalid = true;
    const name = item[0];
    const value = item[1];

    switch (name) {
      case 'firstName':
        isInvalid = isTextInvalid(value);
        break;
      case 'lastName':
        isInvalid = isTextInvalid(value);
        break;
      case 'email':
        isInvalid = isEmailInvalid(value) || data.email !== data.emailConfirm;
        break;
      case 'emailConfirm':
        isInvalid = isEmailInvalid(value) || data.email !== data.emailConfirm;
        break;
      case 'phone':
        isInvalid = isPhoneInvalid(value);
        break;
      case 'company':
        isInvalid = isTextInvalid(value);
        break;
      case 'address':
        isInvalid = isTextInvalid(value);
        break;
      case 'secondAddress': // Don't validate this
        isInvalid = false;
        break;
      case 'state':
        isInvalid = isStateInvalid(value);
        break;
      case 'city':
        isInvalid = isTextInvalid(value);
        break;
      case 'zipcode':
        isInvalid = isZipcodeInvalid(value);
        break;
      default:
        break;
    }

    return {
      [name]: isInvalid
    }
  });

  let errorList = {};
  errors.forEach(error => { errorList = Object.assign({}, errorList, error); });

  let errorCount = Object.keys(errorList).filter((key) => {
    if ((key === 'company' && data.residential) || ['products', 'residential', 'submitted'].includes(key)) {
      // If we're checking company and type is residential, ignore it
      // Also ignore residential as we don't need to error check it.
      return false;
    }
    return errorList[key];
  });

  if (errorCount.length > 0) {
    return {
      type: UPDATE_ERRORS,
      errors: Object.assign({}, errorList, { errorCount: errorCount.length }),
    };
  }

  // We're all valid - This is where we'd do stuff.
  return {
    type: SUBMIT_COMPLETE,
    errors: errorList
  }
}


export function reducer(state, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return Object.assign({}, state, { [action.name]: action.value });
    case UPDATE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
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
    case SUBMIT_COMPLETE:
      return Object.assign({}, state, {
        submitted: true,
        errors: action.errors
      });
    default:
      return state;
  }
}


























