const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const https = require("https");

const API_KEY = "aaf493115f8a6496b62f8b5ec6a549ab-us21";
const AUDIENCE_ID = "9b7312a4e5";

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    let {
        firstName,
        lastName,
        email
    } = req.body;

    const data = {
        "members": [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/" + AUDIENCE_ID;
    const options = {
        action: "POST",
        auth: "JoeFrancisco:" + API_KEY
    };
    const request = https.request(url, options, response => {
        if(response.statusCode === 200){
            res.send("Successfully Subscribed!");
        }else{
            res.send("An error occured");
        }
        response.on("data", data => {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData)
    request.end();
});


app.listen("3000", () => console.log("Server is Running in port 3000"));