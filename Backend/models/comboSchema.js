const mongoose = require('mongoose');
const moment = require('moment-timezone')

const comboSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  foodImg: {
    type: String,
    required: true,
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

const Combo = mongoose.model('Combo', comboSchema);

module.exports = Combo;


