import React, { useContext } from 'react';
import Button from './button.js';
import GigfinderContext from '../context/gigfinder/gigfinderContext.js';

const SearchBar = (props) => {
  const gigfinderContext = useContext(GigfinderContext);

  const newQuery = (event) => {
    props.setQuery(event.target.value)
  }
  const search = () => {
    gigfinderContext.searchJobs()
  }

  return (
    <>
      <input id="search-bar" type="text" value={props.query} placeholder="Job Search" onChange={newQuery} />
      <Button onClick={search} primary>Hire Me!</Button>
    </>
  )
}

export default SearchBar;