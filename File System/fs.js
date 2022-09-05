const fs = require("fs");

const emp1 = { name: "Employee 1", salary: 2000 };
const emp2 = { name: "Employee 2", salary: 5000 };

const writeFile = (data) => {
  fs.writeFile("employees.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);

    console.log("Employees.json created. Employee 1 added.");
  });
};

const readFile = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.log(err);

    console.log(data);
    console.log("Employees.json successfully read.");
  });
};

const appendFile = (data) => {
  fs.appendFile("employees.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);

    console.log("Employee 2 added.");
  });
};

const removeFile = () => {
  fs.unlink("employees.json", (err) => {
    if (err) console.log(err);

    console.log("File successfully removed!");
  });
};

writeFile(emp1);
readFile();

setTimeout(() => {
  appendFile(emp2);
  readFile();
}, 2000);

setTimeout(() => {
  removeFile();
}, 5000);
