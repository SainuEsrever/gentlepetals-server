const joi = require('joi');


const billingValidator = joi.object({
    accountId: joi.string().required(),
    orderId: joi.string().required(),
    totalPrice: joi.number().required(),
    status: joi.string().required(),
});

module.exports = {billingValidator}