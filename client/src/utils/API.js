
//=============================================================================
//                      API routing for REACT
//=============================================================================
// handles GETs and POSTs from react components

import axios from "axios";

const API = {
// Saves a new user to the db
   createUser: function({ username, password }) {
      return axios.post("/api/signup", { username, password });
   },
   createUserProfile: function(profile) {
      return axios.post("/api/signupForm", profile);
   },
   logoutUser: function() {
      return axios.post("/api/logout");
   },
   loginUser: function({ username, password }) {
      return axios.post("/api/login", { username, password });
   },
   request: function(when, where, biketype, difficulty) {
      return axios.post("/api/request", { when, where, biketype, difficulty });
   },
   results: function() {
      return axios.post("/api/results", { where, biketype, difficulty });
   },
   selectedPeople: function(emailObject) {
      console.log(emailObject);
      return axios.post("/api/results");
   },
   isAuthenticated: function() {
      console.log('API isAuthenticated');
      return axios.get("/api/isAuthenticated");
   }
};

export default API;

