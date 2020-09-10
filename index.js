const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);
const { generateReadMe } = require("./scripts/generateMarkdown.js");
const { getUser } = require("./scripts/api.js");

// Questions
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

// Prompts the user
function promptUser() {
  return inquirer.prompt(questions);
}

// Initialize
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
