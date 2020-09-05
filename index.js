const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// const generateMarkdown = require("./scripts/generateMarkdown.js");
// const api = require("./utils/api.js");

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

function generateReadMe(answers) {
  return `

      # ${answers.title}

      ## Description

      ${answers.description} 

      ## Table of Contents

      ## Installation

      ${answers.installation}

      ## Usage

      ${answers.usage}      

      ## License

      This project is licensed under the ${answers.license} License

      ## Contributing

      *${answers.name}
      *${answers.email}
      *${answers.github}

      ## Tests

      Testing?

      ## Questions

      Questions?`;
}

async function init() {
  try {
    const answers = await promptUser();

    const readMe = generateReadMe(answers);

    await writeFileAsync("README.md", readMe);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();

// module.exports = answers;
