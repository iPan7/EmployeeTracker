// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(email, name, id, github) {
        super (email, name, id);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;