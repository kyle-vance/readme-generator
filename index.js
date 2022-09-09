// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// User input prompts
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please write a brief description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe specific usage information',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose a license from the following list:',
        name: 'license',
        choices: [
            'MIT',
            'GNUGPLv3',
            'Apache 2.0',
            'Unlicense',
            'BSD3',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'Please describe specific contribution guidelines for anyone who works on this project',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please specify any commands that can be used to test your project',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
    },
];


// function to write README file
function writeToFile(name, data) {
    fs.writeFile(name, data, (err) =>
         err ? console.error(err) : console.log('Congratulations. You generated a new README.md file. It can be found in the readme-folder.')
    );
};

// function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const readMe = generateMarkdown(data);
        writeToFile('readme-folder/README.md', readMe);
    })
};

// Function call to initialize app
init();