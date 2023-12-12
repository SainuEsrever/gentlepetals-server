const joi = require('joi');

const productValidator = joi.object({
    name: joi.string().required().min(5),
    price : joi.number().required(),
    description: joi.string(),
    categoryId : joi.string().required()
});

module.exports = productValidator;