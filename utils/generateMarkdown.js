// Function to return a license badge based on the passed license
function renderLicenseBadge(license) {
  // the switch statement matches input from list for badge
  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case 'Apache-2.0':
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case 'WTFPL':
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    case 'OSL-3.0':
      return "[![License: OSL 3.0](https://img.shields.io/badge/License-OSL_3.0-red.svg)](https://opensource.org/licenses/OSL-3.0)";
    default:
      return "";// Return empty string if no license is provided
  }
}

// Function to return the license link
function renderLicenseLink(license) {
// the switch statement matches input from list for badge
  switch (license) {
    case 'MIT':
      return "(https://opensource.org/licenses/MIT)";
    case 'Apache-2.0':
      return "(https://opensource.org/licenses/Apache-2.0)";
    case 'WTFPL':
      return "(http://www.wtfpl.net/about/)";
    case 'OSL-3.0':
      return "(https://opensource.org/licenses/OSL-3.0)";
    default:
      return "";// Return empty string if no license is provided
  }
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license) return ""; // Return empty string if no license is provided
  return `## License\n
  ${renderLicenseBadge(license)}\n
This project is licensed under the ${license} license.\n
More details can be found at [HERE](${renderLicenseLink(license)}).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
## Description
  ${data.description}

## Table of Contents
1. [Usage](#usage)
2. [Installation](#installation)
3. [Contributions](#contributions)
4. [Testing](#testing)
5. [‽](#questions)
6. [License](#license)

## Installation
  ${data.install}

## Usage
  ${data.usage}


## Contributions
  ${data.contributions}

## Testing
  ${data.testing}

## Questions
  **Contact Info** \n
[${data.user}](https://github.com/${data.user}) \n
If you have Question on the Machine email them here \n
**Email:** ${data.email}



${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
