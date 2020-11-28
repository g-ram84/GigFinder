import {

  GET_FAVE_EMPLOYERS,

} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FAVE_EMPLOYERS:
      return {
        ...state,
        faveEmployers: action.payload,
      };

    default:
      return state;
  }
};
