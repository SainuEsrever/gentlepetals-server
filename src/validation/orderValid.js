const joi = require('joi');

const orderValidator = joi.object({
    accountId: joi.string().required(),
    products: joi.array().items({
        productId: joi.string().required(),
        amount: joi.number().required(),
    }).required(),
    totalPrice: joi.number().required(),
});

module.exports = {orderValidator}