import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import ResultsPage from './pages/results';
import SignupPage from './pages/signup';
import EmailConfirmation from './pages/email-confirmation';
import EmailRefusal from './pages/email-refusal';

import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import API from './utils/API';

class App extends Component {

  state = {
    matchedPeople: [],
    isLoggedIn: false
  }

  

  handler() {
    this.setState({isLoggedIn: true})
  }

  getMatchedPeople = function(where, when, biketype, hardness) {
    API.getMatchedPeople(where, when, biketype, hardness).then((results) => {
      this.setState({ matchedPeople: results });
    });
  }

  logOutUser = event => {
    event.preventDefault();
    API.logoutUser();
    console.log("isLoggedIn " + this.state.isLoggedIn);
    this.setState({ isLoggedIn: false});
    window.location.href = '/';
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
              { !this.state.isLoggedIn ?
                <div>
                <Link to="/login" className="rm-appbar-link"><Button className="rm-login-button" color="contrast">Login</Button></Link>
                <Link to="/signup" className="rm-appbar-link"><Button className="rm-signup-button" color="contrast">Sign Up</Button></Link>
                </div>
                :
                <div>
                  <Link to="/profile" className="rm-appbar-link"><Button className="rm-signup-button" color="contrast">Profile</Button></Link>
                  <Button className="rm-signup-button" color="contrast" onClick={this.logOutUser}>Logout</Button>
                </div>
              }
              
              
            </Toolbar>
          </AppBar>
          
          <Route exact path="/" component={LandingPage} getMatchedPeople = {this.getMatchedPeople}/>
          <Route exact path="/login" 
            render={({ history }) => <LoginPage parent={this} history={history} />} 
          />
          <Route exact path="/signup" 
            render={({ history }) => <SignupPage parent={this} history={history} />}
          />
          <Route exact path="/profile" 
            render={({ history }) => <ProfilePage parent={this} history={history} />}
          />
          <Route exact path="/confirmation" component={EmailConfirmation} />
          <Route exact path="/refusal" component={EmailRefusal} />
          <Route exact path="/results/:where/:biketype/:difficulty" component={ResultsPage} matchedPeople = { this.state.matchedPeople} />
        </div>
        
      </Router> 
    </div>
    );
  }
}

export default App;
