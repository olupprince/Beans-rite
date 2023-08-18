const mongoose = require("mongoose");
const moment = require('moment-timezone')

const menuSchema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
  soldOut: {
    type: Boolean,
    default: false,
    required: true,
  },
  sold: {
    type: Number,
    default: 0,   
    required: true, 
  },
  foodImg: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: moment().tz('Your_Timezone').add(1, 'hours').toDate(),
  }
});  

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
