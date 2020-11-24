import React, { useReducer } from 'react';
import axios from 'axios';

import GigfinderContext from './gigfinderContext';
import GigfinderReducer from './gigfinderReducer';
import {
  SEARCH_JOBS,
  GET_FAVE_COMPANIES,
  GET_FAVE_WORKERS,
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

  //userType (0) = Not logged in
  //userType (1) = Worker logged in
  //userType (2) = Employer logged in
  const logWorkerIn = async () => {
    console.log("worker logged in");
    const res = await axios.get(
      `/api/workers/1`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    dispatch({
      type: LOG_IN_WORKER,
      payload: res.data[0]
    });
  };

  const logEmployerIn = async () => {
    console.log("employer logged in");
    // const res = await axios.get(
    //   `/api/employers/1`, {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   },
    // });
    // //loggedInUserType = 2;
    // dispatch({
    //   type: LOG_IN_EMPLOYER,
    //   payload: res.data
    // });
  };

  const logOut = () => {
    console.log("all logged out");
    //loggedInUserType = 0;
    // dispatch({
    //   type: LOG_OUT,

    // });
  };



  return (
    <GigfinderContext.Provider
      value={{
        jobs: state.jobs,
        faveWorkers: state.faveWorkers,
        faveCompanies: state.faveCompanies,
        loggedInUser: state.loggedInUser,
        searchJobs,
        getFavouriteWorkers,
        getFavouriteCompanies,
        addNewJob,
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
