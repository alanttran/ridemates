
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
   results: function(search) {
      return axios.post("/api/results", search);
   },
   emailRequest: function(emailObject) {
      console.log('================================================');
      console.log('api/request -- emailObject: ', emailObject);
      return axios.post("/api/request", emailObject);
   },
   isAuthenticated: function() {
      console.log('API isAuthenticated');
      return axios.get("/api/isAuthenticated");
   },
   userProfile: function(){
      console.log('/api/userProfile call')
      return axios.get('/api/getUser');
   }
};

export default API;

