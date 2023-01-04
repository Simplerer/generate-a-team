const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should extend the Employee class and add a new github value to object", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const github = 'davegitsit';
        const employee = new Engineer(name, id, email, github);

        expect(typeof employee).toBe('object');
    });

    it("should take in a value for github and add a new key named such", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const github = 'davegitsit';
        const employee = new Engineer(name, id, email, github);

        expect(employee.github).toBe('davegitsit');
    });

    it("should use the getSchool method to return the name of school for Intern", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const github = 'davegitsit';
        const employee = new Engineer(name, id, email, github);

        expect(employee.getGitHub()).toBe('davegitsit');
    });

    it("should return the role of Intern when getRole method is run", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const github = 'davegitsit';
        this.role = 'Engineer';
        const employee = new Engineer(name, id, email, github);

        expect(employee.getRole()).toBe('Engineer')
    })
});
