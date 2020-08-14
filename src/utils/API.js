import axios from "axios";

export default {
  // Gets all maps
  getMaps: function() {
    return axios.get("/api/maps");
  },
  // Gets the map with the given id
  getMap: function(id) {
    return axios.get("/api/maps/" + id);
  },
  // Deletes the map with the given id
  deleteMap: function(id) {
    return axios.delete("/api/maps/" + id);
  },
  // Saves a map to the database
  saveMap: function(mapData) {
    return axios.post("/api/maps", mapData);
  }
};
