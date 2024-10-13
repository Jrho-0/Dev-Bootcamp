const fs = require("fs");

fs.writeFile("message.txt", "Hello, Welcome to Node.js", (err) => {
    if (err) throw err;
    console.log("This file have been saved!")
});