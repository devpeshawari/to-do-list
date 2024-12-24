const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Schema.ObjectId;

const userSchema = new Schema({
    userID: {type: String, unique: true},
    password: {type: String, unique: true},
    name: {type: String},
    profession: {type: String}
})

const taskSchema = new Schema({
    userID: {type: String},
    heading: {type: String},
    body: {type: String},
    status:{type: Boolean}
})