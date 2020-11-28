import {
  LOG_IN_WORKER,
  LOG_IN_EMPLOYER,
  LOG_OUT,
} from '../types';

/*Logged in User Types 
  0 = Not logged in
  1 = Worker logged in
  2 = Employer logged in
  */
export default (state, action) => {
  switch (action.type) {
    case LOG_IN_WORKER:
      return {
        ...state,
        loggedInUser: action.payload,
        loggedInUserType: 1
      };
    case LOG_IN_EMPLOYER:
      return {
        ...state,
        loggedInUser: action.payload,
        loggedInUserType: 2
      };
    case LOG_OUT:
      return {
        ...state,
        loggedInUser: {},
        loggedInUserType: 0
      };
    default:
      return state;
  }
};
