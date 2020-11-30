import React, { useReducer } from 'react';
import axios from 'axios';
import ApplicationContext from './applicationContext';
import ApplicationReducer from './applicationReducer';
import {
  ADD_APPLICATION,
  GET_APPLICATIONS,
  DECLINE_APPLICATION,
  ACCEPT_APPLICATION
} from '../types';

const ApplicationState = props => {
  const initialState = {
    applications: []
  };

  const [state, dispatch] = useReducer(ApplicationReducer, initialState);

  //Get applications for job
  // const getApplications = async (job_id) => {
  //   const res = await axios({
  //     method: 'get',
  //     url: `/api/jobs/${job_id}`
  //   });
  //   dispatch({
  //     type: GET_APPLICATIONS,
  //     payload: res.data
  //   });
  // };

  const getApplications = async (job_id) => {
    const res = await axios({
      method: 'get',
      url: `/api/applications/job/${job_id}`
    });
    dispatch({
      type: GET_APPLICATIONS,
      payload: res.data
    });
  };

  const addNewApplication = async (application) => {
    const res = await axios({
      method: 'post',
      url: `/api/applications`,
      data: {
        application: { ...application },
      },
    });
    dispatch({
      type: ADD_APPLICATION,
      payload: application
    });
  };

  const declineApplication = async (id) => {
    const res = await axios({
      method: 'put',
      url: `/api/applications/decline/${id}`,
    });
    dispatch({
      type: DECLINE_APPLICATION
    });
  };

  const acceptApplication = async (id, application) => {
    const res = await axios({
      method: 'put',
      url: `/api/applications/${id}`,
      data: {
        application: { ...application },
        'status': 'accepted'
      },
    });
    dispatch({
      type: ACCEPT_APPLICATION,
      payload: application
    });
  };
  

  return (
    <ApplicationContext.Provider
      value={{
        applications: state.applications,
        addNewApplication,
        getApplications,
        declineApplication,
        acceptApplication
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
export default ApplicationState;
