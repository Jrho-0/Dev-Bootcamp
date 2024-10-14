import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello there!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is A.D-O</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +1083488833</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});