const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);
// const generateMarkdown = require("./scripts/generateMarkdown.js");
// const { getUser } = require("./scripts/api.js");

const questions = [
  // {
  //   type: "input",
  //   name: "name",
  //   message: "What is your first and last name?",
  // },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
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
  // {
  //   type: "input",
  //   name: "email",
  //   message: "What is your email address?",
  // },
];

function promptUser() {
  return inquirer.prompt(questions);
}

function generateReadMe(response, { data }) {
  return `
      // ![Profile Picture](${data.avatar_url})
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

      *${data.name}
      *${data.email}
      *${response.github}

      ## Tests

      Testing?

      ## Questions

      Questions?`;
}

async function init() {
  try {
    const response = await promptUser();

    console.log(response);

    const { data } = await axios.get(
      `https://api.github.com/users/${response.github}`
    );

    console.log(data);

    const readMe = generateReadMe(response, { data });

    await writeFileAsync("README.md", readMe);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
// module.exports = { response };
