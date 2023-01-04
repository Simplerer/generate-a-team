const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should create an subclass using the Employee class and return a type of object", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const officeNum = 123;
        const employee = new Manager(name, id, email, officeNum);

        expect(typeof employee).toBe('object');
    });

    it("should take in a new value for officeNum and create a key for it in object", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const officeNum = 123;
        const employee = new Manager(name, id, email, officeNum);

        expect(employee.officeNum).toBe(123);
    });

    it("should return the role of Intern when getRole method is run", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const officeNum = 123;
        this.role = 'Manager'
        const employee = new Manager(name, id, email, officeNum);

        expect(employee.getRole()).toBe('Manager');
    });
});

