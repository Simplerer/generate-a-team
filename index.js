const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const myTeam = [];

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
            let extra 
            if (response.role === 'Engineer') {
                inquirer
                .prompt([
                    {
                        message: 'What is this employee\'s GitHub username?',
                        name: 'github'
                    }
                ])
                .then((response) => {
                    response.github = extra;
                })
            } else {
                inquirer
                .prompt([
                    {
                        message: 'What school does this intern attend?',
                        name: 'school'
                    }
                ])
                .then((response) => {
                    response.school = extra;
                })
            }
            if (response.role === 'Engineer') {
                const engineer = new Engineer(response.name, response.id, response.email, extra)
                myTeam.push(engineer);
                console.log(myTeam);
            } else {
                const intern = new Intern(response.name, response.id, response.email, extra)
                myTeam.push(intern);
                console.log(myTeam);
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
            console.log(myTeam);
            if (response.finish === 'Yes!') {
                employeeStart();
            } else {
                generateTeam();
            }
        })
        // .then((response) => {
        // })
}

managerStart();