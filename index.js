const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateTeam } = require('./src/page-template')
const inquirer = require('inquirer');

const myTeam = [];

const newIntern = (name, id, email) => {
    inquirer
    .prompt([
        {
            message: 'What school does this intern attend?',
            name: 'school'
        },
        {
            type: 'list',
            message: 'Do you need to add any more team members?',
            name: 'finish',
            choices: ['Yes!', 'No!']
        }
    ])
    .then((response) => {
        const intern = new Intern(name, id, email, response.school)
        myTeam.push(intern);
        // console.log(myTeam);
        if (response.finish === 'Yes!') {
            employeeStart();
        } else {
            generateTeam(myTeam);
        }
    })
}
const newEngineer = (name, id, email) => {
    inquirer
    .prompt([
        {
            message: 'What is this employee\'s GitHub username?',
            name: 'github'
        },
        {
            type: 'list',
            message: 'Do you need to add any more team members?',
            name: 'finish',
            choices: ['Yes!', 'No!']
        }
    ])
    .then((response) => {
        const engineer = new Engineer(name, id, email, response.github)
        myTeam.push(engineer);
        // console.log(myTeam);
        if (response.finish === 'Yes!') {
            employeeStart();
        } else {
            generateTeam(myTeam);
        }
    })
}

const employeeStart = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What role will this employee be filling?',
                name: 'role',
                choices: ['Engineer', 'Intern']

            },
            {
                message: 'What is this employee\'s name?',
                name: 'name'
            },
            {
                message: 'Employee id please',
                name: 'id'

            },
            {
                message: 'Employee email please',
                name: 'email'
            },
            
        ])
        .then((response) => {
            
            if (response.role === 'Engineer') {
                newEngineer(response.name, response.id, response.email);
            } else {
               newIntern(response.name, response.id, response.email);
            }
        })
}

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
            },
            {
                type: 'list',
                message: 'Do you need to add any more team members?',
                name: 'finish',
                choices: ['Yes!', 'No!']
            }
        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNum);
            myTeam.push(manager);
            if (response.finish === 'Yes!') {
                employeeStart();
            } else {
                generateTeam(myTeam);
            }
        })
}

managerStart();