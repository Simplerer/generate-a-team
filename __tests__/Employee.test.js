const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should create a class called Employee which takes in name, id, and email", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const employee = new Employee(name, id, email)

        expect(employee).toBe('dave', 2, 'you@gmail.com')
    })


});
