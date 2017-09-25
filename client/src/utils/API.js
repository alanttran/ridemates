
//=============================================================================
//                      API routing for REACT
//=============================================================================
// handles GETs and POSTs from react components

import axios from "axios";

const queryFix = "&q=";

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
   request: function(when, where, biketype, hardness) {
      return axios.post("/api/request", { when, where, biketype, hardness });
   },
   results: function() {
      return axios.post("/api/results");
   },
   selectedPeople: function(emailObject) {
      console.log(emailObject);
      return axios.post("/api/results");
   }

};

// const API = {
//   // Retrieves all articles from the db
//   getArticles: function() {
//     return axios.get("/api/articles");
//   },
//   // Saves a new article to the db
//   saveUser: function(user) {
//     return axios.post("/api/signup", { user });
//   },
//   // Deletes an article from the db
//   deleteArticle: function(id) {
//     console.log('in API delete article ')
//     return axios.delete(process.env.REACT_APP_API_HOST + `/api/articles/${id}`);
//   },
//   search: function(query) {
//   	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
//     return axios.get(BASEURL + APIKEY + queryFix + query);
//   }
// };

export default API;

