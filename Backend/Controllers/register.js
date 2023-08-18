const schema = require('../validators/registrationVal')
const User = require('../models/user')
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const {username, password, email} = req.body
  const userData = req.body
  if (!username || !password || !email) {
    res.json({message: 'Provide username, email and password'})
  }
   // Validate data using the Joi schema
  const { error } = schema.validate(userData);
  if (error) {
    const errorMessage = error.details[0].message;
    return res.status(400).json({ error: errorMessage });
  }

   // check if user exists 
  const existingUser = await User.findOne ({ email })
  if (existingUser) {
    return res.status(409).json({ error: 'Email is already registered' })
  }
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  //create new user in the database
  const newUser = new User ({
    username, 
    email,
    password: hashedPassword
  });
    await newUser.save();
  
  // Return a success response
  res.json({ success: true, message: 'Registration successful!' });

}

module.exports = register;