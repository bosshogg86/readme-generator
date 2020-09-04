const answers = require("../index.js");

async function generateMarkdown(answers) {
  console.log(answers);
  await answers;
  return `
      ${answers.title}
      ${answers.description}
      ${answers.github}
      ${answers.email}
     `;
}

module.exports = generateMarkdown();
