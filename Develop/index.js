// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: "What is the project name?",
    validate: (projectNameInput) => {
      if (projectNameInput) {
        return true;
      } else {
        console.log("Please enter your Project Name!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'githubUserName',
    message: "What is your Github username",
    validate: (githubUserNameInput) => {
      if (githubUserNameInput) {
        return true;
      } else {
        console.log("Please enter your Github username!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },  
  {
    type: 'input',
    name: 'description',
    message: "Please write a short description of your project",
    validate: (descriptionNInput) => {
      if (descriptionNInput) {
        return true;
      } else {
        console.log("Please write a description of your project!");
        return false;
      }
    },
  },
  {
    type: 'list',
    name: 'license',
    message: "What kind of license should your project have?",
    choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: "What command should be run to install dependencies?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter what coomand should be run to install dependencies!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'test',
    message: "What command should be run to run the tests?",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter what command should be run to run the tests!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: "What does the user need to know about using the repo?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter some info of how using the repo!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What does the user need to know about the contributing to the repo?",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Please enter contributing info!");
        return false;
      }
    },
  },    
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
   function init() {
      inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = gm.generateMarkdown(answers);
        writeToFile('./README-file-generator/README.md', readmeContent);

    
  });
}
// Function call to initialize app
init();


