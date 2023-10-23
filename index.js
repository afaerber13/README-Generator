// packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require(generateMarkdown.js);

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name your Project.",
        
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of this project.", 
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide the relative pate to the screenshot image",
    },
    {
        type: "input",
        name: "link",
        message: "Provide a URL where the deployed application can be accessed.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"], 
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "features",
        message: "List some features of this project",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "creator",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List the GitHub usernames of any contributors of this project.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide a walkthrough of required test if applicable.",
    },
];

// README.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile(".dist\README.md", generateMarkdown({...responses}));
    });
}
init();