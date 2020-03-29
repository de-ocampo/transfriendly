// @flow
import {FETCH_ENTRIES} from '../actions';

export default (state: Object = {}, action: Object) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return action.payload;
    default:
      return state;
  }
};
