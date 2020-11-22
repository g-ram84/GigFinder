import React from 'react';
import axios from 'axios';
import './App.css';
import AddJob from './views/addJob';
import Favourites from './views/favourites';
import Home from './views/home';
import Job from './views/job';
import Login from './views/login';
import Register from './views/register';
import Results from './views/results';
import Profile from './views/profile';
import NavBar from './views/navBar';
import {Route, Link} from 'react-router-dom';


function App() {
    return (
      <div className="App">
       <NavBar />
       <Route exact path='/' compontent={Home} />
       <Route exact path='/addJob' compontent={AddJob} />
       <Route exact path='/favourites' compontent={Favourites} />
       <Route exact path='/job' compontent={Job} />
       <Route exact path='/login' compontent={Login} />
       <Route exact path='/profile' compontent={Profile} />
       <Route exact path='/register' compontent={Register} />
       <Route exact path='/results' compontent={Results} />   
      </div>
    );
  }

export default App;
