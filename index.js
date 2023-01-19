// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fileMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Write the title of your progect",
        name: "title",
    },
    {
        type: "input",
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide.
        What was your motivation?`,
        name: "motivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "aim",
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "problem",
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn",
    },        
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "collaborators",
    },
    {
        type: "input",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section",
        name: "assets",
    },
    {
        type: "input",
        message: "If you followed tutorials, include links to those here as well.",
        name: "tutorials",
    }, 
    {
        type: "list",
        message: "Choose your License",
        choices:["MIT", "Apache", "CCO"],
        name: "license",
    },                    
    {
        type: "input",
        message: "Provide examples how to test your application.",
        name: "test",
    },
    {
        type: "input",
        message: "Your GitHub usermane",
        name: "username",
    },   
    {
        type: "input",
        message: "What is your preffered communication if additional questions appear?",
        name: "communication",
    }, 
    {
        type: "input",
        message: "your contact information:",
        name: "contact",
    },     
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README_NEW.md`,fileMarkdown(data),(err) =>
    err ? console.error(err) : console.log('Success! README file created'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        writeToFile(response);
    });
};

// Function call to initialize app
init();

//for test
const myTest = {
    title: "README-GENERATOR",
    motivation: "My motivation was to practice the knowlege I've got on NodeJS Module, and applying Node Package Manager.",
    aim: "My aim was to create a command-line application that dynamically generates a professional README.md file from user's input using the Inquirer package.",
    problem: "This application allows to quickly create a professional README for a new project.",
    learn: "During this project I learned how to work with npm and NodeJS.",
    installation: "The application will be invoked by using the following command in the Command line: node index.js.",
    usage: "Input the information about your application repository by answering the questions in Command line. Then high-quality, professional README.md is generated.",
    collaborators: "",
    assets: "",
    tutorials: "",
    license: "MIT",
    test: "Make input from const 'myTest' and see the result.",
    username: "LenaChe2022",
    communication: "email",
    contact: "lenache2022@gmail.com",
};

//console.log(fileMarkdown(test));