const mongoose = require('mongoose');
const schema = mongoose.Schema;

const foodSchema = new schema({
    imageURL: {
        type: String,
        require: true
    },
    foodName:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    }
   
    
  });
  
  const Foods = mongoose.model('Foods', foodSchema);


  module.exports=Foods