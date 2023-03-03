const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

//const inquirer = require("inquirer");
//const Manager = require("./lib/Manager");

function startProgram() {

function addManager() {

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the manager's name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the manager's Id",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the manager's email address",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the manager's office number",
            name: "officeNumber"
        }
    ])
    .then(answers => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        //console.log(manager);
        teamMembers.push(manager);
        presentMenu();
    });
}

// const inquirer = require("inquirer");
// const Engineer = require("./lib/Engineer");

function addEngineer() {

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the engineer's name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the engineer's Id",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the engineer's email",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the engineer's github user name",
            name: "github"
        }
    ])

    .then(answers => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        teamMembers.push(engineer);
        presentMenu();
    });
}

function addIntern() {

    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the intern's name",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the intern's Id",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the intern's email",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the intern's school",
            name: "school"
        }
 
    ])
    .then(answers => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        teamMembers.push(intern);
        presentMenu();
    });
}

function presentMenu() {
    inquirer 
        .prompt([
            {
                type: "list",
                message: "What kind of team member do you want to add next?",
                name: "role",
                choices: ["Engineer", "Intern", "I dont want to add any more tema members"]
            }
        ])

        .then(userChoice => {
           if (userChoice.role === "Engineer") {
            addEngineer();
           } else if (userChoice.role === "Intern") {
            addIntern();
           } else {
            writeToFile();
           }
        });
}

function writeToFile() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

addManager();

}

startProgram();
    