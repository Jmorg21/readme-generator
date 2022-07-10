function renderLicenseLink(license) {
  if (license !== "No license"){
    return "\n* [License](#license)\n"
  }
  return '';
};

function renderLicenseBadge(license) {
  if (license !== "No license"){
    return `![${license} license](https://img.shields.io/badge/license-${license}-yellow)`
  }
  return '';
};

function renderLicenseSection(license) {
  if (license !== "No license"){
    return `## License`
  }
  return '';
};

function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  * [License](#license)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## How to Contribute
  ${data.howContribute}
  Please see: [Contributor Covenant](https://www.contributor-covenant.org/)
  ## Tests
  ${data.tests}
  ## Questions?
  ${data.questions}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}`;
}

module.exports = generateMarkdown;
