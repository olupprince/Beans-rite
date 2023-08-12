const joi = require('joi');

const validator = (data)=>{
    schema = joi.object({
        foodName: joi.string().alphanum().uppercase().required(),
        description: joi.string().required(),
        price: joi.number().required(),
    });

    return schema.validate(data);
}


module.exports.validator = validator;