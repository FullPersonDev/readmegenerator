// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Import the generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What should be the title for your README file?'
    },
    {
        type: 'list',
        name: 'table',
        message: 'Do you want a table of content?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description for your application:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your application:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide testing instructions:'
    }
];
inquirer.prompt(questions).then(answers => {
    console.log(
`Here is what you said.
    Your title is: ${answers.title}
    If you want table of content: ${answers.table}
    Your description is: ${answers.description}
    Your installation is: ${answers.installation}
    Your usage is: ${answers.usage}
    Your contribution is: ${answers.contribution}
    Your test is: ${answers.test}
    
Thank you`);

    writeToFile('README.md', generateMarkdown(answers));
});

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been successfully created!');
        }
    });
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();