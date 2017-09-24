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

class App extends Component {

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
