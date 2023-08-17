const Joi = require('joi');

const joiMenuSchema = Joi.object({
  food: Joi.string().required(),
  price: Joi.number().required(),
  foodImg: Joi.string().optional(),
  available: Joi.number().required(),
  sold: Joi.number().optional(),
  soldOut: Joi.boolean().truthy(false).optional(),
  ingredients: Joi.string().required()
});

module.exports = joiMenuSchema;

