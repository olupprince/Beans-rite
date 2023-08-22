const schema = require('../validators/registrationVal')
const User = require('../models/user')
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const {username, password, email, phone_no} = req.body
    const userData = req.body
    if (!username || !password || !email || !phone_no){
      res.json({message: 'Provide username, email, phone-number and password'})
    }
     // Validate data using the Joi schema
    const { error } = schema.validate(userData);
    if (error) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({ error: errorMessage });
    }
  
     // check if user exists 
    const existingUser = await User.findOne ({ username })
    const phone = await User.findOne ({ phone_no })
    if (existingUser) {
      return res.status(409).json({ error: 'User is registered' })
    }
    if (phone) {
      return res.status(409).json({ error: 'Phone number is used already' })
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    //create new user in the database
    const newUser = new User ({
      username, 
      email,
      password: hashedPassword,
      phone_no
    });
      await newUser.save();
    
    // Return a success response
    res.json({ success: true, message: 'Registration successful!' });
  }
    
  
  catch (error) {
    if (error.code === 11000 && error.keyPattern.email) {
      // Duplicate email error
      return res.status(409).json({ error: 'Email is already registered' });
    }
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
}

module.exports = register;