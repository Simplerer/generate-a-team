const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should create a class called Employee which return a type of object", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const employee = new Employee(name, id, email)

        expect(typeof employee).toBe('object')
    });

    it("should take in a name and assign to an name key", () => {
        const name = 'dave';
        const employee = new Employee(name);

        expect(employee.name).toBe('dave');
    });

    it("should take in a name that is accessible with the getName method", () => {
        const name = 'dave';
        const employee = new Employee(name);

        expect(employee.getName()).toBe('dave');
    });

    it("should take in an id and assign to an id key", () => {
        const name = 'dave';
        const id = 2;
        const employee = new Employee(name, id)

        expect(employee.id).toBe(2);
    });

    it("should return a name from the object with the getId method", () => {
        const name = 'dave';
        const id = 2;
        const employee = new Employee(name, id)

        expect(employee.getId()).toBe(2);
    });

    it("should take in an email and assign it to an email key", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const employee = new Employee(name, id, email)

        expect(employee.email).toBe('you@gmail.com');
    });

    it("should return an email from new object with getEmail mehtod", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const employee = new Employee(name, id, email)

        expect(employee.getEmail()).toBe('you@gmail.com');
    });

    it("should return given role from object with getRold method", () => {
        const name = 'dave';
        const id = 2;
        const email = 'you@gmail.com';
        const employee = new Employee(name, id, email)
        this.role = 'Employee';

        expect(employee.role).toBe('Employee');
    })

});
