// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What should be the title for your README file?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description for your README file:'
    },
    {
        type: 'list',
        name: 'table',
        message: 'Do you want a table of content?',
        choices: ['Yes', 'No']
    }
];
inquirer.prompt(questions).then(answers => {
    console.log(`Here is what you said.
    Your title is: ${answers.title}.
    Your description is: ${answers.description}.
    If you want table of content: ${answers.table}.`);
});

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();