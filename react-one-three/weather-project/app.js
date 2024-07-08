const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const appID = "f9fe9eaf831db0a804567e44530e3e2c";

app.use(bodyParser.urlencoded({
    "extended": true
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    let {
        cityName
    } = req.body;

    const url = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + appID;
    http.get(url, response => {
        response.on("data", function (data) {
            const weather = JSON.parse(data);
            res.write("The temperature in " + cityName + " is " + weather.main.temp+" degree Celcius.");
            res.send();
        })
    });

});


app.listen("3000", function () {
    console.log("listening.....");
});