// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the title of your project",
    },
    {
        type: "input",
        name: "desc",
        message: "What is the description of the project?",
    },
    {
        type: "input",
        name: "reqs",
        message: "What would you require to install?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the utility of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What licenses would you need?",
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log("The Readme file is successfully created")
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("README.md", generateMarkdown(userInput));
    });
};
// Function call to initialize app
init();
