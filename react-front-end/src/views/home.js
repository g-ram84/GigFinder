import React, { useState } from 'react';
import SearchBar from '../components/searchBar.js';
import '../styles/homePage.scss';
import JobList from '../components/jobList.js';


function Home(props) {
  const [query, setQuery] = useState('');
  // 1. change this input with search bar
  // 2. pass this input into joblist
  return (
    <div className="home_page">
      <span className="title">
      <h1>Welcome to GigFinder!</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <JobList query={query} />
      </span>
    </div>
  );
}

export default Home;