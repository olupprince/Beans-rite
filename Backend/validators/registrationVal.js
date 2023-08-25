const Joi = require("joi");

const registrationSchema = Joi.object({
  username: Joi.string().alphanum().min(4).max(30).required(),
  phoneNumber: Joi.string()
    .regex(/^[0-9]{11}$/)
    .messages({ "string.pattern.base": `Phone number must have 11 digits.` })
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = registrationSchema;
