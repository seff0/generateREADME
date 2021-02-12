// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the title of your project.",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Enter any installation notes.",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter any usage notes.",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter your guidelines for contributions.",
    name: "contributions",
  },
  {
    type: "input",
    message: "Enter any testing instructions.",
    name: "testing",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    choices: [],
    name: "license",
  },
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address.",
    name: "email",
  },
];

// questions
// title, description, installation notes, usage notes, contribution guidelines, test instructions, license, github name, email

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
