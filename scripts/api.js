const { response } = require("../index.js");
const axios = require("axios");
// const username = response.github;
// const username = "bosshogg86";

console.log(response);

// const gitHubUrl = https://api.github.com/users/${}
// const api = {};

async function getUser(response) {
  const username = await response.github;
  const { data } = await axios.get(
    `https://api.github.com/users/${response.github}`
  );
}

module.exports = getUser();
