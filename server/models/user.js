const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    },
    salt:{
        type: String,
        required: true
    },
    animeList: {
        type: [Object],
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User