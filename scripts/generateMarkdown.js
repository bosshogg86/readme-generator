// Generates a README.md
const generateReadMe = (response) => {
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
};

module.exports = { generateReadMe };
