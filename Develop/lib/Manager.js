// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// class Employee {
//     constructor(role, email, name, id) {
//         this.role = role;
//         this.email = email;
//         this.name = name;
//         this.id = id;
//     }
// }

// module.exports = Employee

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(role, email, name, id, officeNumber) {
        super (role, email, name, id);
        this.officeNumber = officeNumber;
    }
}