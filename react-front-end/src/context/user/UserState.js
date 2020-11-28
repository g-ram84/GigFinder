import React, { useReducer } from 'react';
import axios from 'axios';

import UserContext from './userContext';
import UserReducer from './userReducer';
import {
  LOG_IN_WORKER,
  LOG_IN_EMPLOYER,
  LOG_OUT,
} from '../types';

const UserState = props => {
  const initialState = {
    loggedInUserType: 0,
    loggedInUser: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const logWorkerIn = async () => {
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
    const res = await axios.get(
      `/api/employers/1`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    dispatch({
      type: LOG_IN_EMPLOYER,
      payload: res.data[0]
    });
  };
  const logOut = () => dispatch({ type: LOG_OUT });

  return (
    <UserContext.Provider
      value={{
        loggedInUser: state.loggedInUser,
        loggedInUserType: state.loggedInUserType,
        logWorkerIn,
        logEmployerIn,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
