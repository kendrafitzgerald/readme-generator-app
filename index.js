// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = 
inquirer
.prompt([
    {
        type: "input",
        message:"What is the title of your project?",
        name: "Title",
    },
    
   { 
        type: "input",
        message: "What is your project about? Describe it here:",
        name: "Description",

   },
   {
        type: "input",
        message: "What steps are required to install your project?",
        name: "Installation",
   },
   {
        type: "input",
        message: "How can your project be used?",
        name: "Usage"
   },
   {
        type: "list",
        message: "What license does your project have?",
        name: "license",
        choices: ["N/A", "MIT License", "Apache License 2.0", "Creative Commons Zerov1.0 Universal", "GNU GPLv3"],
   }, 
   {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing",
   },
   {

        type: "input",
        message: "What tests have you completed for your project?",
        name: "Tests",
   },
   {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub",
   },
   {
        type: "input",
        message: "What is your email address?",
        name: "Email",
    },
{
    type: "input",
    message: "How can someone reach you with any questions about your project?",
    name: "QuestionInstructions",
},
 ]).then((data) =>
    fs.writeFile('README.md', JSON.stringify(data), (err) =>
    err ? console.error(err) : console.log("Congrats! Your README has been generated!"),
    generateMarkdown()
 ))
 

//TODO: Create a function to write README file
// function writeToFile(data) {
//     fs.writeFile('README.md', data, err =>
//     err ? console.error(err) : console.log("Congrats! Your README has been generated!")
  
// )}


// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
