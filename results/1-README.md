
  # 1
  ### ![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg) License: Apache
  
  ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contribution](#contribution)
   - [Tests](#tests)
   - [Questions](#questions)
   - [License](#license)
   
  ## Description
  undefined
  
  ## Installation
  How to install:
  3
  
  ## Usage
  4
  
  ## Contribution
  Contribution Guidelines:
  5
  
  ## Tests
  Testing Instructions:
  6
  
  ### Questions
  For any additional questions, please contact me via email at 8, or check out my GitHub profile at 7
  
  function renderLicenseSection(license) {
  if (license && license != 'none') {
    return `
    ### License
    ${data.license}
    [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})
    `;
  } 
  return '';
}
  