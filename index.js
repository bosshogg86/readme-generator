const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);
// const generateMarkdown = require("./scripts/generateMarkdown.js");
// const api = require("./utils/api.js");
const username = "bosshogg86";
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your first and last name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project and it's usage.",
  },
  {
    type: "input",
    name: "installation",
    message: "What is required for installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "How is the program run?",
  },
  {
    type: "input",
    name: "license",
    message: "What is the name of the license?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

function promptUser() {
  return inquirer.prompt(questions);
}

function generateReadMe(response) {
  return `

      # ${response.title}

      ## Description

      ${response.description} 

      ## Table of Contents
      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
        
      ## Installation

      ${response.installation}

      ## Usage

      ${response.usage}      

      ## License

      This project is licensed under the ${response.license} License

      ## Contributing

      *${response.name}
      *${response.email}
      *${response.github}

      ## Tests

      Testing?

      ## Questions

      Questions?`;
}

function getUser(username) {
  let res = axios.get(`https://api.github.com/users/${username}`);
  console.log(res);
}

async function init() {
  try {
    const response = await promptUser();

    console.log(response);

    const { data } = await axios.get(
      `https://api.github.com/users/${response.github}`
    );

    console.log(data);

    const readMe = generateReadMe(response);

    await writeFileAsync("README.md", readMe);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();

// module.exports = { answers };
