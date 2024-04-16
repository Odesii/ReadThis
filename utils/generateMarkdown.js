// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license)return''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## DESCRIPTION
    ${data.description}
  # Table of Contents
  **1.[Usage](#usage)
  **2.[Install]](#install)
  **3.[Contributions](#contributions)
  **4.[Testing](#testing)
  **5.[??](#questions)
  **6.[License](#license)

  ## Usage
    ${data.usage}
  ## Install
    ${data.install}
  ## Contributions
    ${data.contributions}
  ## Testing
    ${data.testing}
  ## Questions
    ${data.questions}
  ## License
    ${data.license}
  `;
}

module.exports = generateMarkdown;
