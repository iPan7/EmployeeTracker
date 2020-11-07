const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeelist = [];

function questions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select Role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "email",
        message: "Input email",
        validate: noBlank,
      },
      {
        type: "input",
        name: "name",
        message: "Input Username",
        validate: noBlank,
      },
      {
        type: "input",
        name: "id",
        message: "Create a User ID",
        validate: noBlank,
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        when: (answers) => answers.role === "Manager",
        validate: noBlank,
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?",
        when: (answers) => answers.role === "Engineer",
        validate: noBlank,
      },
      {
        type: "input",
        name: "school",
        message: "Which school is the intern from?",
        when: (answers) => answers.role === "Intern",
        validate: noBlank,
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        employeelist.push(manager);
      } else if (answers.role === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employeelist.push(intern);
      } else if (answers.role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        employeelist.push(engineer);
      }
      inquirer
        .prompt({
          type: "confirm",
          name: "confirm",
          message: "Add another team member?",
        })
        .then((answers) => {
          if (answers.confirm) {
            questions();
          } else {
            fs.writeFile("team.html", render(employeelist), (err) =>
              console.log(err)
            );
          }
        });
    });
}

function noBlank(input) {
  return input !== "" || "Cannot leave blank";
}

questions();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
