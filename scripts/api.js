const response = require("../index.js");
const axios = require("axios");
const username = "bosshogg86";

console.log(response);

// const gitHubUrl = https://api.github.com/users/${}
const api = {
  function getUser(username) {
    let res = axios.get(`https://api.github.com/users/${username}`)
    console.log(res);
  }
};

module.exports = api.getUser();
