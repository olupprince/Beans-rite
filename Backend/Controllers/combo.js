const joiComboSchema = require('../validators/joiComboSchema');
const Combo = require('../models/comboSchema');
require('dotenv').config();



const combo = async (req, res) => {
  try {
        console.log(req.file);
        const { title, price } = req.body;
        const foodImg = req.file.path; // Get the path of the uploaded foodImg
        console.log(foodImg);
        
        const pulpyImg = req.file.path; // Get the path of the uploaded pulpyImg 
        console.log(pulpyImg)
        const { error } = joiComboSchema.validate({title, foodImg, price});
        if (error) {
          return res.status(400).json({ error: error.details[0].message  });
        }
        const existingTitle = await Combo.findOne({ title });
        if (existingTitle) {
          return res.status(409).json({ message: "combo already exists" });
        }
        
        const newCombo = new Combo({
          title,
          price,
          foodImg,
        });
        await newCombo.save();
        res.status(201).json({ message: "Combo successfully added", combo: newCombo});
      } catch (error) {
    console.error('Error adding combo', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const updateCombo = async (req, res) => {
  try {
    const comboId = req.params.id;
    const { title, price } = req.body;
    const combo = await Combo.findById(comboId);
    if (!combo) {
      return res.status(404).json({ error: "Combo not found" });
    }
    const tilt = req.file ? req.file.path  : combo.foodImg

    await combo.updateOne({
      title,
      price,
      foodImg: tilt,
    })

    res.json({ message: "Combo successfully updated", combo });
  } catch (error) {
    console.error("Error updating combo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getCombo = async (req, res) => {
  try {
    const comboId = req.params.id;
    const combo = await Combo.findById(comboId);
    if (!combo) {
      res.status(404).json({error: "Invalid Combo ID"})
    }
    res.status(201).json({ combo })
  } catch (error) {
    console.log('error fectching combo', error)
    res.status(500).json({ message: 'internal server error'})
  }
}


// const getAllCombo = async (req, res) => {
//   try {
//     const combos = await Combo.find({})
//     res.status(201).json({ combos })
//   } catch (error) {
//     console.log('error fectching all combos', error)
//     res.status(500).json({ message: 'internal server error'})
//   }
// }

const deleteCombo = async (req, res) => {
  try {
    const comboId = req.params.id;
    const deleteCombo = await Album.findByIdAndDelete(comboId);
    if (!deleteCombo) {
      res.status(404).json({ error: 'Invalid Combo ID' })
    }
    res.status(200).json({ message: 'Combo deleted successfully' })
  } catch (error) {
    console.error('Error deleting combo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  combo, updateCombo, getCombo, deleteCombo
}





