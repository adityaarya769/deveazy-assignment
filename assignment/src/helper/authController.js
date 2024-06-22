// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');


exports.register = async (req, res) => {

  // const { email, password } = req;

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
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
    // mongoose.connect('mongodb://127.0.0.1:27017/deveazy-assignment');
    // const User = mongoose.model('user1',{
    //   email: { type: String },
    //   password: { type: String }
    // });
    
    // var user = new User({ email: email, password: password });
    // user.save();

    return 'User registered successfully';
  } catch (error) {
    return error.message;
  }
};
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).send('Invalid email or password');
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).send('Invalid email or password');
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };
