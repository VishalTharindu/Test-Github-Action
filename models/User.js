const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    googleId: {type: String},
    date: {type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);