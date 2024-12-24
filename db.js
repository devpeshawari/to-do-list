const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    name: {type: String},
    userID: {type: String},
    password: {type: String},
});

const postSchema = new mongoose.Schema({
    postID: {type: String},
    userID: {type: String},
    title: {type: String},
    body: {type: String},
    
});
const userModel = mongoose.model('User', userSchema);
const postModel = mongoose.model('Post', postSchema);

module.exports = {
    userModel,
    postModel
}