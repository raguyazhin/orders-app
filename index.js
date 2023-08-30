const express = require("express");
const app = express();
const os = require("os");


app.get("/", (req, res) => {res.send("<h2 style='color:Blue;'>Orders Micro Service - " + os.hostname() + " - Version 2</h2>")});

app.get("/health", (req, res) => {
    res.status(200);
    res.send("<h1> Yes! I'm Healthy </h1>");
});

app.listen(3000, () => {
    console.log("Listening to port 3000");
});