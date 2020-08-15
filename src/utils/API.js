import axios from "axios";
const urlPrefix = "http://localhost:8080"

export default {
  //MAPS
  // Gets all maps
  getMaps: function() {
    return axios.get(`${urlPrefix}/api/maps`)
    // return axios.get("/api/maps")
  },
  // Gets the map with the given id
  getMap: function(id) {
    return axios.get(`${urlPrefix}/api/maps/${id}`)
    // return axios.get("/api/maps/" + id);
  },
  // Deletes the map with the given id
  deleteMap: function(id) {
    return axios.delete(`${urlPrefix}/api/maps/${id}`)
    // return axios.delete("/api/maps/" + id);
  },
  // Saves a map to the database
  saveMap: function(mapData) {
    return axios.post(`${urlPrefix}/api/maps/new`, mapData)
    // return axios.post("/api/maps/new", mapData);
  },

  //SUGGESTIONS
  // Gets all suggesstions
  getSuggestions: function() {
    return axios.get(`${urlPrefix}/api/suggestions`)
    // return axios.get("/api/suggestions");
  },
  // Gets the suggestion with the given id
  getSuggestion: function(id) {
    return axios.get(`${urlPrefix}/api/suggestions/${id}`)
    // return axios.get("/api/suggestions/" + id);
  },
  // Deletes the suggestion with the given id
  deleteSuggestion: function(id) {
    return axios.delete(`${urlPrefix}/api/suggestions/${id}`)
    // return axios.delete("/api/suggestions/" + id);
    
  },
  // Saves a suggestion to the database
  saveSuggestion: function(suggestionData) {
    return axios.post(`${urlPrefix}/api/suggestions/new`, suggestionData)
    // return axios.post("/api/suggestions/new", suggestionData);
  },

  //USERS
  
  // login: function (userData) {
  //   return axios.post(`${urlPrefix}/api/users/login`, userData, { withCredentials: true })
  // },
  // logout:function () {
  //     return axios.get(`${urlPrefix}/api/users/logout`, { withCredentials: true })
  // },
  // getCurrentUser: function () {
  //     return axios.get(`${urlPrefix}/api/users/readsessions`, { withCredentials: true })
  // },
  // getCurrentUsersTanks:function(id){
  //   return axios.get(`${urlPrefix}/api/users/${id}/tanks`)
  // },
  // getCurrentTanksFish:function () {
  //     return axios.get(`${urlPrefix}/api/users/currentdata`, { withCredentials: true })
  // }
};
