// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "CCO":
      return  "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)";
      break;
    default:
      return "";      
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "CCO":
      return  "(http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    default:
      return "";      
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection;
  if (renderLicenseBadge(license) != ""){
  contentsLicense = `- [License](#license)`;  
  licenseSection = `## License
  
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`;
} else {
  licenseSection = "";
};
return licenseSection;
};

function renderLicenseContents(license) {
  var contentsLicense;
  if (renderLicenseBadge(license) != ""){
  contentsLicense = `- [License](#license)`;  
} else {
  contentsLicense = "";
};
return contentsLicense;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}     

## Description

${data.motivation}
${data.aim}
${data.problem}
${data.learn}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseContents(data.license)}
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.collaborators}
${data.assets}
${data.tutorials}

${renderLicenseSection(data.license)}

## Tests

${data.test}

## Questions

My GitHub profile: https://github.com/${data.username}

With additional questions contact me by ${data.communication}:
${data.contact}

`;
}

module.exports = generateMarkdown;
