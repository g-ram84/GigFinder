import {
  ADD_APPLICATION,
  GET_APPLICATIONS,
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
      case DECLINE_APPLICATION:
        return {
          ...state,
          applications: action.payload,
        };
    default:
      return state;
  }
};
