import React, { useReducer } from 'react';
import axios from 'axios';

import GigfinderContext from './gigfinderContext';
import GigfinderReducer from './gigfinderReducer';
import {
  SEARCH_JOBS,
  GET_FAVE_COMPANIES,
  GET_FAVE_WORKERS,
  ADD_APPLICATION,
  ADD_JOB,
  LOG_IN_WORKER,
  LOG_IN_EMPLOYER,
  LOG_OUT
} from '../types';

const api_url = "https://lhlgigfinder.azurewebsites.net";
const GigfinderState = props => {
  const initialState = {
    loggedInUserType: 0,
    jobs: [],
    faveCompanies: [],
    faveWorkers: [],
    loggedInUser: {},
    loggedInUserUserType: 0
  };

  const [state, dispatch] = useReducer(GigfinderReducer, initialState);

  // Search Jobs
  const searchJobs = async (searchterm) => {
    const res = await axios.get(
      `/api/jobs?job_title=${searchterm}`, {
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

  const addNewApplication = async (job) => {
    const res = await axios({
      method: 'post',
      url: `api/applications`,
      data: {
        application: { ...application },
      },
    });
    dispatch({
      type: ADD_APPLICATION,
      payload: application
    });
  };

  /*Logged in User Types 
  0 = Not logged in
  1 = Worker logged in
  2 = Employer logged in
  */

  const logWorkerIn = async () => {
    const res = await axios.get(
      `/api/workers/1`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    state.loggedInUserType = 1;
    dispatch({
      type: LOG_IN_WORKER,
      payload: res.data[0]
    });
  };

  const logEmployerIn = async () => {
    const res = await axios.get(
      `/api/employers/1`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    state.loggedInUserType = 2;
    dispatch({
      type: LOG_IN_EMPLOYER,
      payload: res.data[0]
    });
  };

  const logOut = () => {
    state.loggedInUserType = 0;
    dispatch({
      type: LOG_OUT,
      payload: {}
    });
  };



  return (
    <GigfinderContext.Provider
      value={{
        jobs: state.jobs,
        faveWorkers: state.faveWorkers,
        faveCompanies: state.faveCompanies,
        loggedInUser: state.loggedInUser,
        loggedInUserType: state.loggedInUserType,
        searchJobs,
        getFavouriteWorkers,
        getFavouriteCompanies,
        addNewJob,
        addNewApplication,
        logWorkerIn,
        logEmployerIn,
        logOut
      }}
    >
      {props.children}
    </GigfinderContext.Provider>
  );
};
export default GigfinderState;
