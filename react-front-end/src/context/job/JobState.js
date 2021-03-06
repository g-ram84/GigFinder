import React, { useReducer } from 'react';
import axios from 'axios';

import JobContext from './jobContext';
import JobReducer from './jobReducer';
import {
  SEARCH_JOBS,
  CLEAR_JOBS,
  GET_WORKER_JOBS,
  GET_EMPLOYER_JOBS,
  ADD_JOB,
} from '../types';


const JobState = props => {
  const initialState = {
    jobs: [],
    workerJobs: [],
    employerJobs: []
  };
  const [state, dispatch] = useReducer(JobReducer, initialState);
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

  const getWorkerJobs = (worker_id) => {
    axios.get(
      `/api/jobs/applied/worker/${worker_id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    }).then((res) => {
      dispatch({
        type: GET_WORKER_JOBS,
        payload: res.data
      });
    });
  };

  const getEmployerJobs = (employer_id) => {
    axios.get(
      `/api/jobs/employer/${employer_id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    }).then((res) => {
      dispatch({
        type: GET_EMPLOYER_JOBS,
        payload: res.data
      });
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

  const clearJobs = () => {
    dispatch({
      type: CLEAR_JOBS,
    });
  };

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        workerJobs: state.workerJobs,
        employerJobs: state.employerJobs,
        searchJobs,
        addNewJob,
        getWorkerJobs,
        getEmployerJobs,
        clearJobs
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};
export default JobState;
