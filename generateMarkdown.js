// function that returns a license bade based on which license is inputed
function renderLicenseBadge (license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Deployed Applicaton URL
    ${data.link}
    ## Screenshot
    ![alt-text](${data.screenshot})
    ## Table of Contents
    * [Features](#features)
    * [Languages & Dependencies](#languagesanddependencies)
    * [How to Use This Application](#HowtoUseThisApplication)
    * [Contributors](#contributors)
    * [Testing](#testing)
    * [Questions](#questions)
    ## Features
    ${data.features}
    ## Languages & Dependencies
    ${data.require}
    ## How To Use This Application
    ${data.usage}
    ## Contributors
    ${data.contributors}
    ## Testing
    ${data.test}
    `;
}

module.exports = generateMarkdown