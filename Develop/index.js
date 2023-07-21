// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    "What is the project name?",
    "What is your Github username",
    "What is your email address",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run the tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about the contributing to the repo?"

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'ProjectName',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'GithubUsername',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'Description',
      message: questions[3],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[4],
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'install',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'test',
      message: questions[6],
      },
      {
      type: 'input',
      name: 'usage',
      message: questions[7],
      },
      {
       type: 'input',
      name: 'contributing',
      message: questions[8],
      }
  ])
.then((answers) => {
    console.log(answers)
    
  });
}
// Function call to initialize app
init();


