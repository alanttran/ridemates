
//=============================================================================
//                      API routing for REACT
//=============================================================================
// handles GETs and POSTs from react components

import axios from "axios";

const API = {
// Saves a new user to the db
   createUser: function(user) {
      return axios.post("/api/signup", user);
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
   results: function(search) {
      return axios.post("/api/results", search);
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

