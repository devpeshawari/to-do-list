const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {userModel, postModel} = require('./db');
const port= 3000;
const app = express();
//pass yo39haGQBE3wbLox

mongoose.connect("mongodb+srv://devpeshawari:yo39haGQBE3wbLox@cluster0.xw9ol.mongodb.net/to-do-app")
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
app.use(express.json());

app.post("/signup", async (req,res) =>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    
    await userModel.create({
        name: name,
        userID: username,
        password: password,
    })

    res.json({
        message: "You have signed up."
    })
});

app.post("/signin", (req,res) =>{

    res.json({
        message: "You are signed in."
    })
});

app.get("/me", (req,res) =>{

});



app.listen(port);




