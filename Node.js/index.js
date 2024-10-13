//Write message to message.txt

const fs = require("fs");

fs.writeFile("message.txt", "Hello, Welcome to Node.js", (err) => {
    if (err) throw err;
    console.log("This file have been saved!")
});

//Read message from message.txt

const fs = require("fs");

fs.readFile("./message.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
});