import axios from "axios";

// ** Functions that take an object have the structure and keys of that 
// ** object laid out in a comment within!

export default {
  // * AUTHORIZATION
  signup: function (userData) {
    // userData: { username, password, email, name: {first, last}}
    return axios.post("/api/signup", userData);
  },
  login: function (loginData) {
    // loginData: { username, password }
    return axios.post("/api/login", loginData);
  },
  logout: function () {
    return axios.get("api/logout");
  },
  readSessions: function () {
    return axios.get("api/readsessions");
  },

  // * USERS COLLECTION
  getAllUsers: function () {
    return axios.get("api/users");
  },
  getUserById: function (user) {
    // user: { id }
    return axios.get("api/users/one/id", user);
  },
  getUserByUsername: function (user) {
    // user: { username }
    return axios.get("api/users/one/username", user);
  },
  deleteUser: function (user) {
    // user: { id }
    return axios.delete("api/users/delete", user);
  },

  // * MAPS COLLECTION
  getAllMaps: function () {
    return axios.get("/api/maps");
  },
  getMapById: function (map) {
    // map: { id }
    return axios.get("/api/maps/one/id", map);
  },
  postNewMap: function (mapData) {
    // mapData: { name, creatorId, dates: {start, end}, destinations }
    // Note: dates and destinations keys are optional in above object
    return axios.post("/api/maps/new", mapData);
  },
  deleteMap: function (map) {
    // map: { id }
    return axios.delete("/api/maps/delete", map);
  },

  // * SUGGESTIONS COLLECTION
  getAllSuggestions: function () {
    return axios.get("/api/suggestions");
  },
  postNewSuggestion: function (suggestionData) {
    // suggestionData: { userId, mapId, title, category, description, link, cost }
    // Note: link and cost keys are optional in above object
    return axios.post("/api/suggestions/new", suggestionData);
  },
  // Saves a suggestion to the database
  deleteSuggestion: function (suggestion) {
    // suggestion: { id }
    return axios.post("/api/suggestions/delete", suggestion);
  },

  // * CHATS COLLECTION
  getAllChats: function () {
    return axios.get("/api/chats");
  },
  getChatsFromMap: function (map) {
    // map: { id }
    return axios.get("/api/chats/map", map);
  },
  postNewChat: function (chatData) {
    // chatData: { userId, mapId, message }
    return axios.post("/api/chats/new", chatData);
  },
  deleteChat: function (chat) {
    // chat: { id }
    return axios.post("/api/chats/delete", chat);
  }
};
