// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('./userModel');

exports.register = async (req, res) => {

  const { email, password } = req;

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: password });
    await user.save();

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
