export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_ERROR = 'UPDATE_ERROR';

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
    default:
      return state;
  }
}
