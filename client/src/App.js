import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import LandingPage from './pages/landing';
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import ResultsPage from './pages/results'
import SignupPage from './pages/signup'

import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Main from './components/main';

import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {

  render() {
    return (

    <div className = "App">
      <AppBar position="static">
          <Toolbar>
            <Typography className="rm-flex-auto" type="title" color="inherit" >
              RideMates
            </Typography>
            <Button className="rm-login-button" color="contrast">Login</Button>
            <Button className="rm-signup-button" color="contrast">Sign Up</Button>
          </Toolbar>
        </AppBar>
      <Router>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/results/:where/:when" component={ResultsPage} />
        </div>
      </Router> 
    </div>
    );
  }
}

export default App;
