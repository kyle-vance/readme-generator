// function that returns a license badge based on which license is passed in. If there is no license, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'GNUGPLv3':
      return '[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'APACHE2':
      return '[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    case 'BSD3':
      return '[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'None':
      return ""
  };
};

// function that returns the license link. If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT](https://choosealicense.com/licenses/mit/)'
    case 'GNUGPLv3':
      return '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
    case 'APACHE2':
      return '[APACHE 2.0](https://choosealicense.com/licenses/apache-2.0/)'
    case 'Unlicense':
      return `[Unlicense] (https://unlicense.org/)`;
    case 'BSD3':
      return '[BSD 3](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    case 'None':
      return ""
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `This projected is licensed under ${renderLicenseLink(license)}.`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ${renderLicenseBadge(data.license)}

## Description
${data.description}

---

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  --- 

## Installation 
${data.installation}

---

## Usage 
${data.usage}

---

## Contributions
${data.contributions}

---

## Tests
${data.tests}

---

## License
${renderLicenseSection(data.license)}

---

## Questions
Feel free to reach out to me at ${data.email} if you have any questions about this project, any other project I have worked on, or any other questions. My work can be found at https://github.com/${data.github}/.
`;
}

module.exports = generateMarkdown;


