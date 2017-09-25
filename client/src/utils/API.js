
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
<<<<<<< HEAD
   results: function(search) {
      console.log('search: ', search)
      return axios.post("/api/results", search);
=======
   results: function() {
      return axios.post("/api/results");
   },
   selectedPeople: function(emailObject) {
      console.log(emailObject);
      return axios.post("/api/results");
>>>>>>> a24d808a77f17f8531a364807aa12b67483574a5
   }

};

export default API;

