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
    message: "Describe your project and its usage",
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

      Simple project overview.

      ## Description

      ${answers.description} 

      ## Table of Contents

      ## Installation

      * How/where to download your program
      * Any modifications needed to be made to files/folders

      ## Usage

      * How to run the program
      * Step-by-step bullets      

      ## License

      This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

      ## Contributing

      ${answers.github}
      ${answers.email}
      
      ## Tests

      Any advise for common problems or issues.

      ## Questions

      Questions`;
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
