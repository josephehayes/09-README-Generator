const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['None', 'Apache', 'BSD-2', 'BSD-3', 'Boost']

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter instructions for testing your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license',
        choices: licenses
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter a link to your GitHub profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = `./results/${fileName}-README.md`;

    fs.writeFile(filePath, data, (e => {
        e ? console.log('An error occurred while generating the README: ', e) : console.log(`Successfully generated README: ${filePath}`)
    }));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = data.title.toLowerCase();

        writeToFile(fileName, generateMarkdown(data));
    });
}

// Function call to initialize app
init();
