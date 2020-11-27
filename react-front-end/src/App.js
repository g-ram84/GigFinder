
import React from 'react';
import axios from 'axios';
import './App.css';
import './components/jobListItem'
import AddJob from './views/addJob';
import Favourites from './views/favourites';
import Home from './views/home';
import Job from './views/job';
import Login from './views/login';
import Register from './views/register';
import Results from './views/results';
import Profile from './views/profile';
import NavBar from './views/navBar';
import GigfinderState from './context/gigfinder/GigfinderState';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GigfinderState>
        <Router>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/addJob' component={AddJob} />
          <Route exact path='/favourites' component={Favourites} />
          <Route exact path='/jobs/:id' component={Job} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/workers/:id' component={Profile} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/results' component={Results} />
        </Router>
      </GigfinderState>
    </div>
  );
}

export default App;
