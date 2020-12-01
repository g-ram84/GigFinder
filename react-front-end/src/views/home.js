import React, { useState, useContext } from 'react';
import SearchBar from '../components/searchBar.js';
import '../styles/homePage.scss';
import JobList from '../components/jobList.js';
import EmployerJobList from '../components/employerJobList.js';
import WorkerJobList from '../components/workerJobList.js';
import UserContext from '../context/user/userContext.js';


function Home(props) {
  const userContext = useContext(UserContext);
  const { loggedInUser, loggedInUserType } = userContext;
  const [query, setQuery] = useState('');
  return (
    <div className="home_page">
      <span className="title">
        <h1>Welcome to GigFinder!</h1>
        <SearchBar query={query} setQuery={setQuery} />
        {loggedInUserType && loggedInUserType == 2 ? <EmployerJobList /> : <JobList />}
      </span>

    </div>
  );
}

export default Home;