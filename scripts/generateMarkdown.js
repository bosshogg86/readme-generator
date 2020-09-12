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

Requirements to use this project: ${response.usage}

## License

This project is licensed under the ${response.license} license

## Contributing

To contribute to this project ${response.contributing}

## Tests

To run a test use the following command: ${response.tests}

## Questions

If you have any questions you can contact me direct at <${response.email}>. Check out my other repositories at [${data.login}](https://github.com/${data.login}).

[![GitHub followers](https://img.shields.io/github/followers/${data.login}.svg?style=social&label=Follow)](https://github.com/${data.login})

[![Twitter Follow](https://img.shields.io/twitter/follow/${data.twitter_username}.svg?style=social)](https://twitter.com/${data.twitter_username}) 

## ![Profile Picture](${data.avatar_url})
`;
};

module.exports = { generateReadMe };
