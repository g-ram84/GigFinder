
import React, { useContext } from 'react';
import axios from 'axios';
import './App.css';
import './components/jobListItem';
import AddJob from './views/addJob';
import Approve from './views/approve';
import Decline from './views/decline';
import Home from './views/home';
import Job from './views/job';
import Login from './views/login';
import Register from './views/register';
import Profile from './views/profile';
import Thanks from './views/thanks';
import NavBar from './views/navBar';
import JobState from './context/job/JobState';
import UserState from './context/user/UserState';
import WorkerState from './context/worker/WorkerState';
import ApplicationState from './context/application/ApplicationState';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <UserState>
        <JobState>
          <WorkerState>
            <ApplicationState>
              <Router>
                <NavBar />
                <Route exact path='/' component={Home} />
                <Route exact path='/addJob' component={AddJob} />                <Route exact path='/jobs/:id' component={Job} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/workers/:id' component={Profile} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/approve' component={Approve} />
                <Route exact path='/thanks' component={Thanks} />
                <Route exact path='/decline' component={Decline} />
              </Router>
            </ApplicationState>
          </WorkerState>
        </JobState>
      </UserState>
    </div>
  );
}

export default App;
