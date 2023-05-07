console.log("hello world");

const fs = require("fs").promises;

fs.readFile("./db/contacts.json")
  .then((data) => console.log(data.toString()))
  .catch((error) => console.log(error));
