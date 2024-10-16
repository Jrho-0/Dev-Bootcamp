import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const today = new Date("June 20, 2023 01:15:00");
    // ("June 24, 2023 01:15:00") = weedend 

    const day = today.getDay();

    var type;
    var adv;

    // let type ="a weekday";
    // let adv = "it's time to work hard!!!"

    if (day === 0 || day === 6) {
        type ="the weekend";
        adv = "it's time to have some fun!!!"
    } else {
        type ="a weekday";
        adv = "it's time to work hard!!!"

    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});