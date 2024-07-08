const express = require("express");
const bodyParser = require("body-parser");
const dateHelper = require(__dirname + "/dateHelper.js");
const app = express();



const items = [];
const workItems = [];

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    
    const listTitle = dateHelper.getDate();
    res.render("list", {
        listTitle,
        items,
        button: "day-btn"
    });
});


app.post("/", (req, res) => {
    let {
        newToDo,
        listBtn
    } = req.body;
    console.log(listBtn);

    if (listBtn === "work-btn") {
        workItems.push(newToDo);
        res.redirect("/work");
    } else {
        items.push(newToDo);
        res.redirect("/");
    }

});


app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        items: workItems,
        button: "work-btn"
    });
});

app.get("/about", (req,res)=>{
    res.render("about");
});


app.listen(3000, () => {
    console.log("App is running on port 3000");
});