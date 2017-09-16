import React, { Component } from 'react';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Login />
        <Signup />
        <Profile />
      </div>
    );
  }
}

export default App;
