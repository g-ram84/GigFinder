import {
  SEARCH_JOBS,
  ADD_JOB,
  CLEAR_JOBS,
  GET_WORKER_JOBS,
  GET_EMPLOYER_JOBS,
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

    case GET_WORKER_JOBS:
      return {
        ...state,
        workerJobs: action.payload,
      };
    case GET_EMPLOYER_JOBS:
      return {
        ...state,
        employerJobs: action.payload,
      };


    default:
      return state;
  }
};
