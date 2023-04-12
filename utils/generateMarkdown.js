// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const fs = require('fs')

function renderLicenseBadge(license) {
  if (license === 'N/A') {
    return ""
  } else if (license === 'MIT License') {
    return `[MIT License Badge](https://img.shields.io/badge/MIT-MIT%20License-blue)`
  } else if (license === 'Apache License 2.0') {
    return `[Apache License 2.0 Badge](https://img.shields.io/badge/Apache%202.0-Apache%20License%202.0-red)`
  } else if (license === 'Creative Commons Zerov1.0 Universal') {
    return `[Creative Commons License Badge](https://img.shields.io/badge/Creative%20Commons-Creative%20Commons%20Zerov1.0%20Universal-purple)`
  } else if (license === 'GNU GPLv3') {
    return `[GNU License Badge](https://img.shields.io/badge/GNU%20Public%20License-GNU%20GPLv3-yellow)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return ""
  } else if (license === 'MIT License') {
    return `[MIT License URL](https://opensource.org/license/mit/)`
  } else if (license === 'Apache License 2.0') {
    return `[Apache License 2.0 URL](https://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'Creative Commons Zerov1.0 Universal') {
    return `[Creative Commons License URL](https://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'GNU GPLv3') {
    return `[GNU License URL](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license=== 'N/A') {
    return ""
  } else {
    return `## License
              This project uses the ${license}. Click the provided link to learn more ${renderLicenseLink}!`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${renderLicenseBadge}

  ## Description
  ${data.Description}

  ## Table of Contents

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ${renderLicenseSection}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  My GitHub username is [GitHub UserName](${data.GitHub}). My email is ${data.Email}. ${data.QuestionInstructions}

`;
}

module.exports = generateMarkdown;
