import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import LandingPage from './pages/landing';
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import ResultsPage from './pages/results'
import SignupPage from './pages/signup'

import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import API from './utils/API';

class App extends Component {

  state = {
    matchedPeople: [],
  }

  getMatchedPeople = function(where, when, biketype, hardness) {
    API.getMatchedPeople(where, when, biketype, hardness).then((results) => {
      this.setState({ matchedPeople: results });
    });
  }

  render() {
    return (

    <div className = "App">
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography className="rm-flex-auto" type="title" color="inherit" >
                <Link to="" className="rm-appbar-title-link">RideMates</Link>
              </Typography>
              <Link to="/login" className="rm-appbar-link"><Button className="rm-login-button" color="contrast">Login</Button></Link>
              <Link to="/signup" className="rm-appbar-link"><Button className="rm-signup-button" color="contrast">Sign Up</Button></Link>
            </Toolbar>
          </AppBar>
          
          <Route exact path="/" component={LandingPage} getMatchedPeople = { this.getMatchedPeople }/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/results/:where/:when" component={ResultsPage} matchedPeople = { this.state.matchedPeople} />
        </div>
        
      </Router> 
    </div>
    );
  }
}

export default App;
