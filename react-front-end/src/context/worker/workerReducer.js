import {
  GET_FAVE_WORKERS,
  SEARCH_WORKERS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FAVE_WORKERS:
      return {
        ...state,
        faveWorkers: action.payload,
      };
    case SEARCH_WORKERS:
      return {
        ...state,
        workers: action.payload,
      };
    default:
      return state;
  }
};
