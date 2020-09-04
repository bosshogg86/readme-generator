const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// const generateMarkdown = require("./scripts/generateMarkdown.js");
// const api = require("./utils/api.js");

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
      ${answers.email}
     `;
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
