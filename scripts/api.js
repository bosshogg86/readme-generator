require("dotenv").config();
const api_key = process.env.API_KEY;
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: `${api_key}`,
});

const getUser = async () => {
  const { data } = await octokit.request(`/users/${username}`);
  console.log(data);
  return data;
};

module.exports = { getUser };
