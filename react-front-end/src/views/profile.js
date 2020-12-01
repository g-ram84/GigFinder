import React, { Fragment, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import UserContext from '../context/user/userContext.js';
import WorkerList from '../components/workerList';
import WorkerState from '../context/worker/WorkerState';
import JobState from '../context/job/JobState';
import JobList from '../components/jobList';
import UserJobList from '../components/userJobList';
import './job.scss';


function Profile(props) {
  const userContext = useContext(UserContext);
  const { loggedInUser } = userContext;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [application, setApplication] = useState();
  useEffect(() => {
    axios.get(
      `/api/applications/${props.match.params.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((res) => {
        setApplication(res.data[0]);
      });
  }, [props.match.params.id]);

  const [worker, setWorker] = useState();
  useEffect(() => {
    axios.get(
      `/api/workers/${props.match.params.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((res) => {
        setWorker(res.data[0]);
      });
  }, [props.match.params.id]);

  if (worker === undefined) {
    return (
      <h1>Loading!</h1>
    );
  }
  if (application === undefined) {
    return (
      <h1>Loading!</h1>
    );
  }

  const resumeFilePath = `../resumes/${worker.last_name}.pdf`;
  return (
    <Fragment>
      <div>
        <WorkerList worker={worker} />
      </div>
      <Document
        className={"resume-pdf"}
        file={resumeFilePath}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {loggedInUser.id === application.worker_id &&
        <UserJobList />
      }
    </Fragment>
  );
}
export default Profile;


