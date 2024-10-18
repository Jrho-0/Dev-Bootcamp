import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const numLetters = req.body["fName"].length + req.body["lName"].length;
    console.log(numLetters);
    res.render("index.ejs", {
      number0fLetters: numLetters
    });
  });
  
app.listen(port, () => {
    console.log (`Server is running on ${port} port`);
});