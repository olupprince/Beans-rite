const schema = require("../validators/registrationVal");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, phone, password, email } = req.body;
  const userData = req.body;
  if (!username || !password || !email || !phone) {
    res.json({ message: "Provide username, phone, email and password" });
  }
  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
  }
  // Validate data using the Joi schema
  const { error } = schema.validate(userData);
  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({ error: errorMessage });
  }

  // check if user exists
  const existingUser = await User.findOne({ email, phoneNumber });
  if (existingUser) {
    return res
      .status(409)
      .json({ error: "Email or Phone Number is already registered" });
  }
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  //create new user in the database
  const newUser = new User({
    username,
    phoneNumber,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  // Return a success response
  res.json({ success: true, message: "Registration successful!" });
};

module.exports = register;
