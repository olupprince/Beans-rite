const Foods = require('../Model/foodSchema');
const route = require('../Router/routes');
const {validator} = require('../Validator/validator')

const postFoods = async (req, res) => {
    console.log(req.body);

    
    const file=req.file;
    if(file==null){
        return res.status(400).json({ error: 'You need to insert an image file.' });
    }
    
    
        // Validate input
        const { error, value } = validator(req.body);
        const { foodName, description, price } = value;

        const imageURL = req.file.path;

        if (error) {
            console.log(error);
          return res.status(400).json({ error: error.details[0].message });
        }
        
        // Create a new post
       try { 
        const newPost = new Foods({
            imageURL,
            foodName,
            description,
            price,
        });
        await newPost.save();
    
        res.json(newPost);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
      }
}


module.exports=postFoods;