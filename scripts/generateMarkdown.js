// Generates a README.md
const generateReadMe = (response) => {
  return `# ${response.title}

[![${response.license} license](https://img.shields.io/badge/license-${response.license}-blue.svg)](https://github.com/bosshogg86/readme-generator)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [About Me](#about-me)

## Description

${response.description} 
  
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

- ${data.name}
- ${response.email}
- [![GitHub followers](https://img.shields.io/github/followers/${data.login}.svg?style=social&label=Follow)](https://github.com/${data.login})
- [![Twitter Follow](https://img.shields.io/twitter/follow/${data.twitter_username}.svg?style=social)](https://twitter.com/${data.twitter_username}) 

## ![Profile Picture](${data.avatar_url})
`;
};

module.exports = { generateReadMe };
