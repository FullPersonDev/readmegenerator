// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    return '[![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    return '[Apache License 2.0](https://opensource.org/license/Appache-2.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
## License

This project is licensed under the terms and conditions of the ${license}.  Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  var tableOfContents = '';

  if(answers.table === 'Yes'){
  tableOfContents =`
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
`  } else {''}

  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return `
# ${answers.title}

${licenseBadge}
${licenseSection}

${tableOfContents}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.test}

## Questions
https://github.com/${answers.username}

How to reach me with additional questions:
${answers.email}
`;
}

module.exports = generateMarkdown;
