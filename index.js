const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

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
    choices: ["MIT", "ISC", "Apache"],
    name: "license",
  },
  {
    type: "input",
    message: "Enter your full name for licensing.",
    name: "fullName",
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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (error) =>
    error ? console.error(error) : console.log("Success, README generated.")
  );
}

function init() {
  inquirer.prompt(questions).then((data) => {
    let title = `${data.title}`.replace(/\s+/g, "");
    writeToFile(`${title}.md`, data);
  });
}

init();
