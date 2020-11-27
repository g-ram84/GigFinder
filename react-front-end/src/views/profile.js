import React, { Fragment, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';
import WorkerList from '../components/workerList';
import JobList from '../components/jobList';
// import applications from '../../../express-back-end/routes/applications.js';
// import workers from '../../../express-back-end/routes/workers.js';

function Profile(props) {
  const gigfinderContext = useContext(GigfinderContext)
  const { loggedInUser } = gigfinderContext;
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
  console.log("loggedinuser", loggedInUser)
  console.log("application", application)
  const resumeFilePath = `../resumes/${worker.last_name}.pdf`;
  //console.log('profile', worker);
  return (
    <Fragment>
      <div>
        <WorkerList worker={worker} />
      </div>
      <Document
        file={resumeFilePath}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      
      {loggedInUser.id === application.worker_id && 
      <JobList />
      }
    </Fragment>
  );
}

export default Profile;


///////////////////////////////////////////
// import React, { Fragment, useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// function Profile() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
//   return (
//     <Fragment>
//       <Document
//         file="../resumes/resume01.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//     </Fragment>
//   );
// }

//export default Profile;