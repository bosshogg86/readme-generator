const { response } = require("../index.js");
const axios = require("axios");
let username;

// console.log(response);

// const gitHubUrl = https://api.github.com/users/${}
// const api = {};

// async function getUser() {
//   const { data } = await axios.get(`https://api.github.com/users/${username}`);
// }

const getUser = async (username) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
  console.log(data);
  return data;
};

module.exports = { getUser };
