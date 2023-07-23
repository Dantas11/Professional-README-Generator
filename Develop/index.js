// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'ProjectName',
    message: "What is the project name?"
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: "What is your Github username"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address"
  },
  {
    type: 'input',
    name: 'description',
    message: "Please write a short description of your project"
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
    message: "What command should be run to install dependencies?"
  },
  {
    type: 'input',
    name: 'test',
    message: "What command should be run to run the tests?"
  },
  {
    type: 'input',
    name: 'usage',
    message: "What does the user need to know about using the repo?"
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What does the user need to know about the contributing to the repo?"
  }
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


