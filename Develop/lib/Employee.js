// TODO: Write code to define and export the Employee class


class Employee {
    constructor(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
    }
    getName() {
        // console.log(`Employee Name: ${this.name} `);
        return this.name;
    };
    
    getId() {
        // console.log(`Employee ID: ${this.id}`);
        return this.id;
    };
    
    getEmail() {
        // console.log(`Employee Email: ${this.email}`);
        return this.email;
    }
    
    getRole() {
        // It will return what this object functionally is-- the string: 'employee'
        // console.log(`Employee Role: ${this.getRole}`);
        return "Employee";
    }
}

module.exports = Employee