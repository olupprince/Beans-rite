const Joi = require('joi');

const joiComboSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  foodImg: Joi.string().optional(),
  pulpyImg: Joi.string().optional()
});

module.exports = joiComboSchema;

