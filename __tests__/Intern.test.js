const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should extend the Employee class and add a new school value to object", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const school = 'yale';
        const employee = new Intern(name, id, email, school);

        expect(typeof employee).toBe('object');
    });

    it("should take in a value for school and add a new key named such", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const school = 'yale';
        const employee = new Intern(name, id, email, school);

        expect(employee.school).toBe('yale');
    });

    it("should use the getSchool method to return the name of school for Intern", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const school = 'yale';
        const employee = new Intern(name, id, email, school);

        expect(employee.getSchool()).toBe('yale');
    });

    it("should return the role of Intern when getRole method is run", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const school = 'yale';
        this.role = 'Intern';
        const employee = new Intern(name, id, email, school);

        expect(employee.getRole()).toBe('Intern')
    })

});


