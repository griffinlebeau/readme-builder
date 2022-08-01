
//badge,
function licenseGen(data){
  if(data === "Public Domain"){
    license = data + ": When a work is in the public domain, it is free for use by anyone for any purpose without restriction under copyright law. Public domain is the purest form of open/free, since no one owns or controls the material in any way."
    licenseLink = "Link: [Public Domain](https://wiki.creativecommons.org/wiki/public_domain)"
  }
  if(data === "Creative Commons"){
    license = data + ": A CC license is used when an author wants to give other people the right to share, use, and build upon a work that the author has created."
    licenseLink = "Link: [Creative Commons](https://creativecommons.org/)"
  }
  if(data === "Copyright"){
    license = data + ": A copyright is a type of intellectual property that gives its owner the exclusive right to copy, distribute, adapt, display, and perform a creative work, usually for a limited time. The creative work may be in a literary, artistic, educational, or musical form."
    licenseLink = "Link: [Copyright](https://www.copyright.gov/)"
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
var licenseLink = "";
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
    licenseGen(data.license)
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