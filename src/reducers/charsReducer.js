import {FETCHING, ERROR, FETCHED} from '../actions';
const initialState = {
  fetching: false, error: '', results: []
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });
    case FETCHED:
      return Object.assign({}, state, { fetching: false, chars: state.chats.concat(action.chars)});
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
