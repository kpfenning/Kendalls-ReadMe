// function that returns badge of the license
function licenseBadge(license) {
    if (license !== 'Unlicensed') {
        return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
    } else {
        return '';
    }
}
// function that returns the links to the license
function licenseLink(license) {
    if (license !== 'Unlicensed') {
        return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
        return '';
    }
}
// function that returns the license section
function licenseSection(license) {
    if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
  
    The application is covered under the following license:
  
    ${licenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }
// generates the template for the markdown file
function generateREADME(data) {
   
    return `
    # ${data.title}

    [![License Badge](https://img.shields.io/badge/license-${data.license}-blue)](https://choosealicense.com/licenses/${data.license}/)

    ## Table of Contents

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Description
    <a name='description'></a>

    ${data.description}

    ## Installation
    <a name='installation'></a>

    ${data.installation}

    ## Usage
    <a name='usage'></a>

    ${data.usage}

    ## License
    <a name='license'></a>

    This application is covered under the [${data.license}](https://choosealicense.com/licenses/${data.license}) license.

    ## Contributing
    <a name='contributing'></a>

    ${data.contributions}

    ## Tests
    <a name='test'></a>

    ${data.testing}

    ## Questions
    <a name='questions'></a>

    For additional questions, please contact [${data.githubAccount}](https://github.com/${data.githubAccount}) or email at ${data.email}.
    `;
}

module.exports = generateREADME;
    








