const axios = require("axios");

// const gitHubUrl = https://api.github.com/users/${}
const api = {
  getUser(username) {
  }
};


axios
  .get(`https://api.github.com/users/${}`)
  .then(function(res) {
    console.log(res.data);
  });

module.exports = api;
