import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landing';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Main from './components/main';

class App extends Component {
  render() {
    return (
    <div className = "App">
      <LandingPage></LandingPage>
      	<Main />
        <Login />
        <Signup />
        <Profile />
    </div>
    );
  }
}

export default App;
