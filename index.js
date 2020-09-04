const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const api = require("./utils/api.js");
const generateMarkdown = require("./scripts/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
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

function generateReadMe(answers) {
  return `
      ${answers.title}
      ${answers.description}
      ${answers.github}
      ${answers.email}<
     `;
}

promptUser()
  .then(function (answers) {
    const readMe = generateReadMe(answers);

    return writeFileAsync("README.md", readMe);
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });

// function writeToFile(fileName, data) {}

// function init() {}

// init();
