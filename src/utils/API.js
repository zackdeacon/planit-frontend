import axios from "axios";
const urlPrefix = "https://planitserver.herokuapp.com";

// ** Functions that take an object have the structure and keys of that 
// ** object laid out in a comment within!

export default {
  // * AUTHORIZATION
  signup: function (userData) {
    // userData: { username, password, email, name: {first, last}}
    return axios.post(`${urlPrefix}/api/auth/signup`, userData,
      { withCredentials: true }
    );
  },
  login: function (loginData) {
    // loginData: { username, password }
    return axios.post(`${urlPrefix}/api/auth/login`, loginData, { withCredentials: true });
  },
  logout: function () {
    return axios.get(`${urlPrefix}/api/auth/logout`, { withCredentials: true });
  },
  getSessionData: function () {
    return axios.get(`${urlPrefix}/api/auth/readsession`, { withCredentials: true });
  },

  // * USERS COLLECTION
  getAllUsers: function () {
    return axios.get(`${urlPrefix}/api/users`);
  },
  getUserById: function (userId) {
    // userId is type String
    return axios.get(`${urlPrefix}/api/users/one/id/${userId}`);
  },
  getUserByUsername: function (username) {
    // username is type String
    return axios.get(`${urlPrefix}/api/users/one/username/${username}`);
  },
  deleteUser: function (user) {
    // user: { id }
    return axios.delete(`${urlPrefix}/api/users/delete`, user);
  },

  // * MAPS COLLECTION
  getAllMaps: function () {
    return axios.get(`${urlPrefix}/api/maps`);
  },
  getMapById: function (mapId) {
    // mapId is type String
    return axios.get(`${urlPrefix}/api/maps/one/id/${mapId}`);
  },
  postNewMap: function (mapData) {
    // mapData: { name, creatorId, dates: {start, end}, destinations }
    // Note: dates and destinations keys are optional in above object
    return axios.post(`${urlPrefix}/api/maps/new`, mapData, { withCredentials: true });
  },
  deleteMap: function (map) {
    // map: { id }
    return axios.delete(`${urlPrefix}/api/maps/delete`, map);
  },

  // * SUGGESTIONS COLLECTION
  getAllSuggestions: function () {
    return axios.get(`${urlPrefix}/api/suggestions`);
  },
  getSuggestionsForMap: function (mapId) {
    return axios.get(`${urlPrefix}/api/suggestions/map/${mapId}`);
  },
  postNewSuggestion: function (suggestionData) {
    // suggestionData: { userId, mapId, title, category, description, link, cost }
    // Note: link and cost keys are optional in above object
    return axios.post(`${urlPrefix}/api/suggestions/new`, suggestionData, { withCredentials: true });
  },
  // Saves a suggestion to the database
  deleteSuggestion: function (suggestion) {
    // suggestion: { id }
    return axios.post(`${urlPrefix}/api/suggestions/delete`, suggestion);
  },
  // saves a vote for a suggestion
  saveVote: function (suggestion) {
    return axios.post(`${urlPrefix}/api/suggestions/vote/:suggestionId`, suggestion, { withCredentials: true })
  },

  // * CHATS COLLECTION
  getAllChats: function () {
    return axios.get(`${urlPrefix}/api/chats`);
  },
  getChatsForMap: function (mapId) {
    // mapId is type String
    return axios.get(`${urlPrefix}/api/chats/map/${mapId}`);
  },
  postNewChat: function (chatData) {
    // chatData: { userId, mapId, message }
    return axios.post(`${urlPrefix}/api/chats/new`, chatData, { withCredentials: true });
  },
  deleteChat: function (chat) {
    // chat: { id }
    return axios.post(`${urlPrefix}/api/chats/delete`, chat);
  }
};
