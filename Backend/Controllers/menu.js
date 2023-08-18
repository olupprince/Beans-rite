const Menu = require('../models/menuSchema')
const menuSchema = require('../validators/joiMenuVal')
const menu = async (req, res) => {
try {
  const {price, food, foodImg, available, sold, soldOut, ingredients } = req.body
  const { error } = menuSchema.validate({food, foodImg, soldOut, sold, available, ingredients, price});
  if (error) {
    return res.status(400).json({ error: error.details[0].message  });
  }
  const existingFood = await Menu.findOne({ food });
  if (existingFood) {
    return res.status(409).json({ message: "food already exists" });
  }
  const dopeMenu = new Menu ({
    price,
    food,
    ingredients, 
    foodImg: req.file.path,
    available,
    soldOut,
    sold,
  })
  await dopeMenu.save();
  res.status(201).json({message: "Food successfully created", dopeMenu})
} catch (error) {
  res.status(500).json({ error: 'Internal server error' });
  }
}






const getMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const menuItem = await Menu.findById(menuId);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ menuItem });
  } catch (error) {
    console.error('Error fetching menu item', error);
    res.status(500).json({ error: 'Server error' });
  }
};




const deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const deletedMenuItem = await Menu.findByIdAndDelete(menuId);
    if (!deletedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item successfully deleted' });
  } catch (error) {
    console.error('Error deleting menu item', error);
    res.status(500).json({ error: 'Server error' });
  }
};





const updateMenu = async (req, res) => {
  try {
    const menuId = req.params.id;

    const { price, food, sold, available, soldOut, ingredients } = req.body;

    const menu = await Menu.findById(menuId);
    if (!menu) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    const tilt = req.file ? req.file.path  : menu.foodImg
    await menu.updateOne({
      price, 
      food, 
      foodImg: tilt, 
      sold, 
      available, 
      soldOut, 
      ingredients
    })

    res.json({ message: 'Menu item successfully updated', menu });
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { updateMenu, deleteMenu, getMenu, menu };
