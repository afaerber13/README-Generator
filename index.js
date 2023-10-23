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
        message: "Please name your Project.",
        
    }
]