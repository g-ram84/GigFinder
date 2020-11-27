import React, { Fragment, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';
import WorkerList from '../components/workerList';
// import workers from '../../../express-back-end/routes/workers.js';

function Profile(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [worker, setWorker] = useState();
  useEffect(() => {
    axios.get(
      `/api/workers/${props.match.params.id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((res) => {
        console.log('res', res.data[0]);
        setWorker(res.data[0]);
      });
  }, [props.match.params.id]);

  if (worker === undefined) {
    return (
      <h1>Loading!</h1>
    );
  }
  console.log(worker.lastname);
  //const resumeFilePath = `../resumes/${worker.lastname}.pdf`;
  console.log('profile', worker);
  return (
    <Fragment>
      <div>
        <WorkerList worker={worker} />
      </div>

      <Document
        file="../resumes/tunnock.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
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