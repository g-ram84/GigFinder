import {
  SEARCH_JOBS,
  GET_FAVE_COMPANIES,
  GET_FAVE_WORKERS,
  ADD_JOB,
  LOG_IN_WORKER,
  LOG_IN_EMPLOYER,
  LOG_OUT,
  ADD_APPLICATION,
  GET_WORKERS,
  GET_APPLICATIONS
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
    case ADD_JOB:
      return {
        ...state,
        faveWorkers: action.payload,
      };
    case ADD_APPLICATION:
      return {
        ...state,
        faveWorkers: action.payload,
      };
    case LOG_IN_WORKER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case LOG_IN_EMPLOYER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        loggedInUser: action.payload,
      };
      case GET_APPLICATIONS:
        return {
          ...state,
        loggedinUser: action.payload, //maybe not
        };
  

    default:
      return state;
  }
};
