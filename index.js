const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const promptUser = () => {
    console.log(`
    ===================
    Create A New ReadMe
    ===================
    `);
    inquirer
    .prompt([
        {
            name:'title',
            type:'input',
            message:'What is the title of your project?',
            validate: function (titleInput) {
                if (titleInput) {
                    return true
                } else {
                    console.log('You must enter a project title!');
                    return false
                }
            }

        },
        {
            name: 'confirmDesc',
            type: 'confirm',
            message: 'Would you like to include a description of your project?'
        },
        {
            name: 'desc',
            type: 'input',
            message: 'Describe your project:',
            when: ({confirmDesc}) => {
                if (confirmDesc) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        {
            name: 'confirmInstall',
            type: 'confirm',
            message: 'Would you like to include installation instructions?'
        },
        {
            name: 'install',
            type: 'input',
            message: 'Installation instructions:',
            when: ({confirmInstall}) => {
                if (confirmInstall) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        {
            name : 'confirmUsage',
            type: 'confirm',
            message: 'Would you like to include usage instructions?'
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Usage:',
            when: ({confirmUsage}) => {
                if (confirmUsage) {
                    return true
                }
                else {
                    return false
                }
            }
        },
        {
            name: 'confirmLicense',
            type: 'confirm',
            message: 'Do you have a license?',
        },
        {
            name: 'license',
            type: 'list',
            message: 'Please select your license:',
            choices: ['Public Domain', 'Creative Commons', 'Copyright'],
            when: ({confirmLicense}) => {
                if (confirmLicense) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            name: 'contribute',
            type: 'input',
            message: 'Contributors:',
        },
        {
            name: 'confirmTest',
            type:'confirm',
            message: 'Would you like to include testing information?'
        },
        {
            name: 'test',
            type:'input',
            message: 'Testing information:',
            when: ({confirmTest}) => {
                if (confirmTest) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter your Github: '
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter your email: '
        }
    ])
    .then(response => {
        console.log(response);
        var markdown = generateMarkdown(response);
        console.log(markdown)
        fileGen(markdown)
    })
}


const fileGen = markdown => {
    fs.writeFile('README.md', markdown, err => {
        if (err) throw err;
        console.log('Success! Your ReadMe file has been generated!')
    });
}

promptUser();