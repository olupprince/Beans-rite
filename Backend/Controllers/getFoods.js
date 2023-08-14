const Foods = require("../Model/foodSchema");

const getFoods = async (req, res,) => {
    try {
        const allFoods = await Foods.find();
        res.json(allFoods);
        console.log(allFoods);
    }   catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error....'});
    }
}


module.exports=getFoods;