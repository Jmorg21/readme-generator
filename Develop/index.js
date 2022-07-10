const fs = require('fs');
const path = require('path')
const { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your name. (required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username",
        validate: (gitHubUsername) => {
          if (gitHubUsername) {
            return true;
          } else {
            console.log("Please enter your Github username.");
            return false;
          }
        },
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email.");
            return false;
          }
        },
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of this project?'  
    },
    {
          type: 'input',
          name: 'description',
          message: 'Please provide a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions?'  
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: [
          'MIT', 
          'Babel',
          '.NET', 
          'Core', 
          'Rails', 
          'No license'
        ]
    },
    {
        type: 'input',
        name: 'credits',
        message: "Please provide the names of all contributors",
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
