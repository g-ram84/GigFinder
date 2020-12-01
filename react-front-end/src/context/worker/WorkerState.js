import React, { useReducer } from 'react';
import axios from 'axios';
import WorkerContext from './workerContext';
import WorkerReducer from './workerReducer';
import {
  GET_FAVE_WORKERS,
  SEARCH_WORKERS,
} from '../types';

const WorkerState = props => {
  const initialState = {
    faveWorkers: [],
    workers: [],
  };
  const [state, dispatch] = useReducer(WorkerReducer, initialState);
  const searchWorkers = async () => {
    const res = await axios.get(
      `/api/workers`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    dispatch({
      type: SEARCH_WORKERS,
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

  return (
    <WorkerContext.Provider
      value={{
        workers: state.workers,
        faveWorkers: state.faveWorkers,
        getFavouriteWorkers,
        searchWorkers
      }}
    >
      {props.children}
    </WorkerContext.Provider>
  );
};
export default WorkerState;
