const mongoose = require("../../infrastructure/db")
const Schema = mongoose.Schema

const commentSchema = new Schema ({
    email: String,
    content: String,
    like: [String]
})

const Post = mongoose.model("Post", {
    email: String,
    content: String,
    imageUrl: String,
    like: [String],
    comments: [commentSchema]
})

module.exports = Post;