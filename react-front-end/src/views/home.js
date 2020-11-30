import React, { useState } from 'react';
import SearchBar from '../components/searchBar.js';
import '../styles/homePage.scss';
import JobList from '../components/jobList.js';


function Home(props) {
  const [query, setQuery] = useState('');
  return (
    <div className="home_page">
      <span className="title">
      <h1>Welcome to GigFinder!</h1>
      <SearchBar query={query} setQuery={setQuery} />    
      <JobList />
      <img
        className="hiring"
        src={'../images/building-804526_1920.jpg'}
        alt={'hiring'}
        />
     
      </span>
      
    </div>
  );
}

export default Home;