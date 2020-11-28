import React, { useReducer } from 'react';
import axios from 'axios';

import JobContext from './jobContext';
import JobReducer from './jobReducer';
import {
  SEARCH_JOBS,
  CLEAR_JOBS,
  ADD_JOB,
} from '../types';


const JobState = props => {
  const initialState = {
    jobs: [],
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
        searchJobs,
        addNewJob,
        clearJobs
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};
export default JobState;
