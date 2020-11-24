import React, { useReducer } from 'react';
import axios from 'axios';

import GigfinderContext from './gigfinderContext';
import GigfinderReducer from './gigfinderReducer';
import {
  SEARCH_JOBS,
  GET_FAVE_COMPANIES,
  GET_FAVE_WORKERS,
  ADD_JOB,
  SET_USER_TYPE,
} from '../types';

const api_url = "https://lhlgigfinder.azurewebsites.net";
const GigfinderState = props => {
  const initialState = {
    loggedInUserIsEmployer: true,
    jobs: [],
    faveCompanies: [],
    faveWorkers: [],

  };

  const [state, dispatch] = useReducer(GigfinderReducer, initialState);

  // Search Jobs
  const searchJobs = async () => {
    const res = await axios.get(
      `/api/jobs`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    dispatch({
      type: SEARCH_JOBS,
      payload: res.data
    });
  };

  // Get Companies Favorite Workers
  const getFavouriteWorkers = async company_id => {
    const res = await axios.get(
      `/api/savedworkers/${company_id}`
    );
    dispatch({
      type: GET_FAVE_WORKERS,
      payload: res.data
    });
  };

  // Get Employees Favorite Companies
  const getFavouriteCompanies = async worker_id => {
    const res = await axios.get(
      `/api/savedcompanies/${worker_id}`
    );
    dispatch({
      type: GET_FAVE_COMPANIES,
      payload: res.data
    });
  };
  const addNewJob = async (job) => {
    const res = await axios({
      method: 'post',
      url: `/api/jobs`,
      data: {
        job: { ...job },
      },
    });
    dispatch({
      type: ADD_JOB,
      payload: job
    });
  };

  const setUserType = async (isWorker) => {
    // const res = await axios({
    //   method: 'post',
    //   url: `/api/jobs`,
    //   data: {
    //     job: { ...job },
    //   },
    // });
    dispatch({
      type: SET_USER_TYPE,
      payload: isWorker
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
        getFavouriteCompanies,
        addNewJob,
        setUserType
      }}
    >
      {props.children}
    </GigfinderContext.Provider>
  );
};
export default GigfinderState;
