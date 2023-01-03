const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const myTeam = [];

const managerStart = () => {
    inquirer
    .prompt([
        {
            message: 'What is your manager\'s name?',
            name: 'name'
        },
        {
            message: 'Manager\'s employee id please',
            name: 'id'
            
        },
        {
            message: 'Manager\'s employee email please',
            name: 'email'
        },
        {
            message: 'What is this manager\'s office number please',
            name: 'officeNum'   
        }
    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNum);
        myTeam.push(manager);
        console.log(myTeam);
    })
}

managerStart();