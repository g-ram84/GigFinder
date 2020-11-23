import React, { useReducer } from 'react';
import axios from 'axios';
import GigfinderContext from './gigfinderContext';
import GigfinderReducer from './gigfinderReducer';
import {
  SEARCH_JOBS,
  GET_FAVE_COMPANIES,
  GET_FAVE_WORKERS,
} from '../types';

const GigfinderState = props => {
  const initialState = {
    jobs: [],
    faveCompanies: [],
    faveWorkers: [],

  };

  const [state, dispatch] = useReducer(GigfinderReducer, initialState);

  // Search Jobs
  const searchJobs = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/jobs`
    );
    dispatch({
      type: SEARCH_JOBS,
      payload: res.data
    });
  };

  // Get Companies Favorite Workers
  const getFavouriteWorkers = async company_id => {
    const res = await axios.get(
      `http://localhost:8080/api/savedworkers/${company_id}`
    );
    dispatch({
      type: GET_FAVE_WORKERS,
      payload: res.data
    });
  };

  // Get Employees Favorite Companies
  const getFavouriteCompanies = async worker_id => {
    const res = await axios.get(
      `http://localhost:8080/api/savedcompanies/${worker_id}`
    );
    dispatch({
      type: GET_FAVE_COMPANIES,
      payload: res.data
    });
  };

  return (
    <GigfinderContext.Provider
      value={{
        jobs: state.jobs,
        faveWorkers: state.faveWorkers,
        faveCompanies: state.faveCompanies,
        searchJobs,
        getFavouriteWorkers,
        getFavouriteCompanies

      }}
    >
      {props.children}
    </GigfinderContext.Provider>
  );
};
export default GigfinderState;
