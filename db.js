const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    userID: {type: ObjectID, unique: true},
    password: {type: String},
    name: {type: String}
    
});

const postSchema = new mongoose.Schema({
    postID: {type: ObjectID, unique: true},
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