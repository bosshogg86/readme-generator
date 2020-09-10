const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
require("dotenv").config();
const writeFileAsync = util.promisify(fs.writeFile);
// const generateMarkdown = require("./scripts/generateMarkdown.js");
const { getUser } = require("./scripts/api.js");

const questions = [
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
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is required to use this project?",
  },
  {
    type: "input",
    name: "license",
    message: "What kind of license should your project have?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can the user contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
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

      To install dependencies, run the following command: ${response.installation}

      ## Usage

      ${response.usage} is required to use this project.      

      ## License

      This project is licensed under the ${response.license}

      ## Contributing

      To contribute to this project ${response.contributing}

      ## Tests

      To run a test use the following command: ${response.tests}

      ## About Me

      ${data.name}
      ${data.email}
      ${response.email}
      ${response.github}
      [![Twitter Follow](https://img.shields.io/twitter/follow/${data.twitter_username}.svg?style=social)](https://twitter.com/${data.twitter_username}) 
      ![Profile Picture](${data.avatar_url})

      `;
}

async function init() {
  try {
    const response = await promptUser();

    username = response.github;

    data = await getUser(username);

    const readMe = generateReadMe(response);

    writeFileAsync("README.md", readMe);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
