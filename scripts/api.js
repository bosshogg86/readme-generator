const axios = require("axios");

// Github API call
const getUser = async (username) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
  console.log(data);
  return data;
};

module.exports = { getUser };
