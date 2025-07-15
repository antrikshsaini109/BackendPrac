const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mondataasso");

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: String,
    age: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

mongoose.exports = mongoose.model('user',userSchema);