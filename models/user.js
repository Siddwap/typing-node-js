const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        email : String,
        password : String
    },{
        timestamps : true
    }
)

module.exports = mongoose.model('user', userSchema);