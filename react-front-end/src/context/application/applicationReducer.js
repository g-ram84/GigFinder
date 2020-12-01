import {
  ADD_APPLICATION,
  GET_APPLICATIONS,
  GET_ALL_APPLICATIONS,
  DECLINE_APPLICATION,
  ACCEPT_APPLICATION
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case ADD_APPLICATION:
      return {
        ...state,
        faveWorkers: action.payload,
      };
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };
    case GET_ALL_APPLICATIONS:
      return {
        ...state,
        allApplications: action.payload,
      };
    case DECLINE_APPLICATION:
      return {
        ...state,
        applications: action.payload,
      };
    case ACCEPT_APPLICATION:
      return {
        ...state,
        applications: action.payload,
      };
    default:
      return state;
  }
};
