const fs = require("fs");

const empArr = [];
const emp1 = { name: "Employee 1", salary: 2000 };
const emp2 = { name: "Employee 2", salary: 5000 };

const writeFile = (data) => {
  if (empArr.length === 0) {
    console.log("Employees.json created.");
    empArr.push(emp1);
  } else {
    empArr.push(emp2);
  }

  fs.writeFile("employees.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);

    console.log("New employee added.");
  });
};

const readFile = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) console.log(err);

    console.log(`Read File: ${data}`);
  });
};

const removeFile = () => {
  fs.unlink("employees.json", (err) => {
    if (err) console.log(err);

    console.log("File successfully removed!");
  });
};

writeFile(empArr);
readFile();

setTimeout(() => {
  writeFile(empArr);
}, 2000);

setTimeout(() => {
  readFile();
}, 4000);

setTimeout(() => {
  removeFile();
}, 6000);
