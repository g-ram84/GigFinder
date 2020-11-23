import React, { useState } from 'react';
import SearchBar from '../components/searchBar.js';
import '../styles/homePage.scss';
import JobList from '../components/jobList.js';

function Home(props) {
  const [input, setInput] = useState('');
  return (
    <div>
      <span class="title">
      <h1>Welcome to GigFinder!</h1>
      <SearchBar
      />
      {/* <JobList /> */}
      </span>
    </div>
  );
}

export default Home;