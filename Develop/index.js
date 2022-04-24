// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        //project title
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput){
                return true;
            }else{
                console.log('You need to enter a title, try again!');
                return false;
            }
        }
    },
    
    // project description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            }else{
                console.log('You need to provide a description of your project, try again!');
                return false
            }
        }
    },

    // install instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installInput => {
            if(installInput){
                return true;
            }else{
                console.log('You need to provide information about installing your project, try again!');
                return false;
            }
        }
    },

    //usage information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if(usageInput){
                return true;
            }else{
                console.log('You need to provide information about using your project, try again!');
                return false;
            }
        }
    },

       // contribution guidelines
       {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },

    // test instructions
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
    },

    // license options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },

    // github username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    // email address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
