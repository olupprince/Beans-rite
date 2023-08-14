const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const dbURL = process.env.Compass || process.env.AtlasURI;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error);
  })


  module.exports = mongoose;