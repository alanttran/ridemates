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

let imgUrl = './images/biking-cover-3.png';

let bgImage = {
  backgroundImage: 'url(' + imgUrl + ')'
}

class App extends Component {

  state = {
    matchedPeople: [],
    isLoggedIn: false,
    result: []
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
        <div className="rm-page-layout">
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
          
          <Route exact path="/" 
            render={({ history }) => <LandingPage parent={this} history={history}
            getMatchedPeople = {this.getMatchedPeople}/>
          } 
          />
          <Route exact path="/login" 
            render={({ history }) => <LoginPage parent={this} history={history} />} 
          />
          <Route exact path="/signup" 
            render={({ history }) => <SignupPage parent={this} history={history} />}
          />
          <Route exact path="/profile" 
            render={({ history }) => <ProfilePage parent={this} history={history} />}
          />
          <Route exact path="/api/request/:id/yes" component={EmailConfirmation} />
          <Route exact path="/api/request/:id/no" component={EmailRefusal} />
          <Route exact path="/results" 
           render={({ history }) => <ResultsPage 
              parent={this} 
              history={history}
              data={this.state.result}
              />}
          /> 
          <div className="rm-footer">
            <ul className="rm-footer-item">
              <li className="rm-footer-list-title">Features</li>
              <li>About</li>
              <li>Terms</li>
              <li>Partners</li>
              <li>Updates</li>
            </ul>
            <ul  className="rm-footer-item">
              <li className="rm-footer-list-title">Details</li>
              <li>Tools</li>
              <li>Resources</li>
            </ul>
            <ul  className="rm-footer-item">
              <li className="rm-footer-list-title">Technology</li>
              <li>Usage</li>
              <li>Products</li>
              <li>Contracts</li>
            </ul>
            <ul  className="rm-footer-item">
              <li className="rm-footer-list-title">FAQ</li>
              <li>Questions</li>
              <li>Answers</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>
        
        
      </Router> 
    </div>
    );
  }
}

export default App;
