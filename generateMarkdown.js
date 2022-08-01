


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license) {
     return `
  ##${renderLicenseBadge(data.license)}
  ##${renderLicenseLink(data.license)}
  `} else {
    return false
  }
}


var desc = "";
var descHead = "";
var install = "";
var installHead = "";
var usage = "";
var usageHead = "";
var license = "";
var licenseHead = "";
var tests = "";
var testHead = "";

var table = ""

contentBuilder = data => {
  var contents = ""
  if(data.confirmDesc){
    contents = contents + "-[Description](#description) ";
    descHead = "### Description  ";
    desc = data.desc + "  ";
  };
  if(data.confirmInstall){
    contents = contents + " -[Installation](#installation) ";
    installHead = "### Installation  ";
    install = data.install + "  ";
  };
  if(data.confirmUsage){
    contents = contents + " -[Usage](#usage) ";
    usageHead = "### Usage  ";
    usage = data.usage + "  ";
  };
  if(data.confirmLicense){
    contents = contents + " -[License](#license) ";
    licenseHead = "### License  "
    license = data.license + "  ";
  };
  if(data.confirmTest){
    contents = contents + " -[Tests](#tests) ";
    testHead = "### Tests  "
    tests = data.test + "  ";
  };

  table = contents
}

module.exports = generateMarkdown = data => {
  var title = "### " + data.title + "  ";
  var conHead = "### Contributors  ";
  var contributors = data.contribute;
  var qHead = "### Questions  ";
  var questions = "Github: " + data.github + "  " + "Email: " + data.email + "  ";
  contentBuilder(data);
  return `
  ${title}

  ### Table of Contents: 
  ${table}
  -[Contributors](#contributors)  
  -[Questions](#questions)

  ${descHead}
  ${desc}

  ${installHead}
  ${install}

  ${usageHead}
  ${usage}

  ${licenseHead}
  ${license}

  ${conHead}
  ${contributors}

  ${testHead}
  ${tests}
  
  ${qHead}
  ${questions}
  `;
}