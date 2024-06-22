const mongoose = require('mongoose');

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/deveazy-assignment');

// User model
const User = mongoose.model('user1',{
    name: { type: String },
    age: { type: Number }
});

var new_user = new User({
    name: 'Manish',
    age:34
})

new_user.save()
console.log("Success")