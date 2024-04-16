// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name:"title",
        message:"The Machine Needs a Name!"
    },
    {
        type: "input",
        name:"description",
        message:"What is the Machines Reason for Being?"
    },
    {
        type: "list",
        name:"license",
        message:"Machines Usage Rights?",
        choices:["MIT", "AFL-3.0", "Apache-2.0", "WTFPL", "	OSL-3.0" ]
    },
    {
        type: "input",
        name:"install",
        message:"Whats the Machines Startup Sequence?"
    },
    {
        type: "input",
        name:"usage",
        message:"How do You Control the Machine?"
    },
    {
        type: "input",
        name:"contributions",
        message:"Who Helps the Machine?"
    },
    {
        type: "input",
        name:"testing",
        message:"How is the Machine Tested"
    },
    {
        type: "input",
        name:"questions",
        message:"Who to Contact with Questions About the Machine?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Your Documentation is Ready')
  );

}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
