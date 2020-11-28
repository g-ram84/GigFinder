import React, { useReducer } from 'react';
import axios from 'axios';

import EmployerContext from './employerContext';
import EmployerReducer from './employerReducer';
import {
  GET_FAVE_EMPLOYERS,
} from '../types';

const api_url = "https://lhlgigfinder.azurewebsites.net";
const EmployerState = props => {
  const initialState = {
    faveEmployers: [],
  };

  const [state, dispatch] = useReducer(EmployerReducer, initialState);
  // Get Worker Favorite employers
  const getFavouriteEmployers = async worker_id => {
    const res = await axios.get(
      `/api/savedcompanies/${worker_id}`
    );
    dispatch({
      type: GET_FAVE_EMPLOYERS,
      payload: res.data
    });
  };

  return (
    <EmployerContext.Provider
      value={{
        faveEmployers: state.faveEmployers,
        getFavouriteEmployers,
      }}
    >
      {props.children}
    </EmployerContext.Provider>
  );
};
export default EmployerState;
