const joi = require('joi');

const cartValidator = joi.object({
    // accountId: joi.string().required().unique.message({
    //     "string.empty" : "title không được để trống",
    //     "any.required" : "title là bắt buộc",
    // })
});

module.exports = {cartValidator}