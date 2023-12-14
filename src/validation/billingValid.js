const joi = require('joi');

const orderValidator = joi.object({
    accountId: joi.string().required(),
    orderId: joi.string().required(),
    totalPrice: joi.number().required(),
});

module.exports = {orderValidator}