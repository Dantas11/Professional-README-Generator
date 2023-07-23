// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ' ';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `The application is covered under the following license: ${renderLicenseLink(license)}`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.ProjectName}

${renderLicenseBadge(data.license)}

## Description
  
${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.test}

## License 

${renderLicenseSection(data.license)}

## Question

Github link: ${data.githubUsername}

Email: ${data.email}

`;
}

exports.generateMarkdown = generateMarkdown;


