import axios from "axios";
const urlPrefix = "https://planitserver.herokuapp.com";
// const urlPrefix = "http://localhost:8080";


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
  changeName: function (name) {
    // name: { first, last }
    // Note: leaving first or last empty will result in only one updating
    return axios.put(`${urlPrefix}/api/users/change/name`, name, { withCredentials: true });
  },
  changePassword: function (passwordData) {
    // passwords: { oldPassword, newPassword }
    // Note: leaving first or last empty will result in only one updating
    return axios.put(`${urlPrefix}/api/users/change/password`, passwordData, { withCredentials: true });
  },
  acceptMapInvitiation: function (acceptData) {
    // index the index of the invite to remove
    return axios.put(`${urlPrefix}/api/users/invitation/accept`, acceptData, { withCredentials: true });
  },
  declineMapInvitiation: function (index) {
    // index the index of the invite to remove
    return axios.put(`${urlPrefix}/api/users/invitation/decline`, index, { withCredentials: true });
  },
  deleteUser: function (userId) {
    return axios.delete(`${urlPrefix}/api/users/delete/${userId}`, { withCredentials: true });
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
    mapData.dates = { start: mapData.startDate, end: mapData.endDate };
    return axios.post(`${urlPrefix}/api/maps/new`, mapData, { withCredentials: true });
  },
  inviteNewGuest: function (inviteData) {
    // inviteData: { mapId, guestEmail }
    return axios.put(`${urlPrefix}/api/maps/invite`, inviteData);
  },
  addSuggestionCategory: function (categoryData) {
    // categoryData: { mapId, newCategory }
    return axios.put(`${urlPrefix}/api/maps/categories/add`, categoryData);
  },
  removeSuggestionCategory: function (categoryData) {
    // categoryData: { mapId, category }
    return axios.put(`${urlPrefix}/api/maps/categories/remove`, categoryData);
  },
  deleteMap: function (map) {
    // map: { id }
    return axios.delete(`${urlPrefix}/api/maps/delete`, map);
  },
  postNewImage: function(image, mapId){
    return axios.post(`${urlPrefix}/api/maps/images/new/${mapId}`, image, { withCredentials: true })
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
  saveVote: function (vote, sugId) {
    return axios.post(`${urlPrefix}/api/suggestions/vote/${sugId}`, vote, { withCredentials: true })
  },
  // saves a vote for a suggestion
  saveComment: function (comment, sugId) {
    return axios.post(`${urlPrefix}/api/suggestions/comment/${sugId}`, comment, { withCredentials: true })
  },
  getCommentsForSuggestion: function (sugId) {
    return axios.get(`${urlPrefix}/api/suggestions/comments/${sugId}`)
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
  },

  // * EMAIL ROUTES
  sendFinalRender: function (renderData) {
    // renderData: { mapId, email }
    return axios.post(`${urlPrefix}/api/email/send/map/render`, renderData);
  }
};
