import axios from "axios";

export default {
  //MAPS
  // Gets all maps
  getMaps: function() {
    return axios.get("/api/maps");
  },
  // Gets the map with the given id
  getMap: function(id) {
    return axios.get("/api/map/" + id);
  },
  // Deletes the map with the given id
  deleteMap: function(id) {
    return axios.delete("/api/map/" + id);
  },
  // Saves a map to the database
  saveMap: function(mapData) {
    return axios.post("/api/map", mapData);
  },

  //SUGGESTIONS
  // Gets all suggesstions
  getSuggestions: function() {
    return axios.get("/api/suggesstions");
  },
  // Gets the suggestion with the given id
  getSuggestion: function(id) {
    return axios.get("/api/suggesstion/" + id);
  },
  // Deletes the suggestion with the given id
  deleteSuggestion: function(id) {
    return axios.delete("/api/suggesstion/" + id);
  },
  // Saves a suggestion to the database
  saveSuggestion: function(suggestionData) {
    return axios.post("/api/suggesstion", suggestionData);
  }
};
