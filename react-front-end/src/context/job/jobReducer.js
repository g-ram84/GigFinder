import {
  SEARCH_JOBS,
  ADD_JOB,
  CLEAR_JOBS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
      };
    default:
      return state;
  }
};
