const Foods = require("../models/foodSchema");

const get1Food = async (req, res,) => {

    const foodId = req.params.id;
    console.log(foodId);

    try {


        const oneFood = await Foods.findById({_id:foodId});

        if (!oneFood) {
            return res.status(404).json({ error: 'Food not found...' });
        }

        res.json(oneFood);
        console.log(oneFood);


    }   catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error....'});
    }
}


module.exports=get1Food;