import {
  ADD_APPLICATION,
  GET_APPLICATIONS
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
        loggedinUser: action.payload, //maybe not
      };
    default:
      return state;
  }
};
