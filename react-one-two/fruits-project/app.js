const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Kiwi",
    rating: 3,
    review: "Not so much"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "Joe",
    age: 28
})

//person.save();

Fruit.find().then(function(fruits, err){
    if(err)
        console.log(err)
    else
        fruits.forEach ( function (fruit) {
            console.log(fruit.name);
        });
});