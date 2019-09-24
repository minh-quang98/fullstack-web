const mongoose = require("../../infrastructure/db")
const { Schema } = require("mongoose")
const crypto = require("crypto")

const UserSchema = new Schema({
    email: String,
    list_following: [String],
    hash: String,
    salt: String
})

UserSchema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex")
    return this.hash === hash;
}

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex")
}

const User = mongoose.model("User", UserSchema)

module.exports = User;