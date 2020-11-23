import {
  SEARCH_JOBS,
  GET_FAVE_COMPANIES,
  GET_FAVE_WORKERS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case GET_FAVE_COMPANIES:
      return {
        ...state,
        faveCompanies: action.payload,
      };

    case GET_FAVE_WORKERS:
      return {
        ...state,
        faveWorkers: action.payload,
      };

    default:
      return state;
  }
};
