const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    address:String,
    fav: [String],
});

module.exports = mongoose.model('user', schema)



