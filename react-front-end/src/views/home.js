import React, { useState } from 'react';
import SearchBar from '../components/searchBar.js';
import Button from '../components/button.js'
import '../styles/homePage.scss';

function Home(props) {
  const [input, setInput] = useState('');
  return (
    <div>
      <span class="title">
      <h1>Welcome to GigFinder!</h1>
      <SearchBar
      />
      </span>
    </div>
  );
}

export default Home;