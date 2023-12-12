const joi = require('joi');

const signUpValidator = joi.object({
    userName : joi.string().required().min(6).max(25).message({
        "string.empty" : "username không được để trống",
        "any.required" : "username là bắt buộc",
        "string.min" : "username phải có ít nhất {#limit} ký tự",
        "string.max" : "username không được vượt quá {#limit} ký tự",
    }),
    email : joi.string().required().email().message({
        "string.empty" : "Email không được để trống",
        "any.required" : "Email là bắt buộc",
        "string.email" : "Email không đúng định dạng"
    }),
    password : joi.string().required().min(6).max(25).message({
        "string.empty" : "password không được để trống",
        "any.required" : "password là bắt buộc",
        "string.min" : "password phải có ít nhất {#limit} ký tự",
        "string.max" : "password không được vượt quá {#limit} ký tự",
    }),
    confirmPassword : joi.string().required().min(6).max(25).message({
        "string.empty" : "Confirmpassword không được để trống",
        "any.required" : "Confirmpassword là bắt buộc",
        "string.min" : "Confirmpassword phải có ít nhất {#limit} ký tự",
        "string.max" : "Confirmpassword không được vượt quá {#limit} ký tự",
    }).valid(joi.ref("password"), { message: "Confirmpassword không khớp" }),
    role : joi.string()
});

const signInValidator = joi.object({
    email : joi.string().required().email().message({
        "string.empty" : "Email không được để trống",
        "any.required" : "Email là bắt buộc",
        "string.email" : "Email không đúng định dạng"
    }),
    password : joi.string().required().min(6).max(25).message({
        "string.empty" : "password không được để trống",
        "any.required" : "password là bắt buộc",
        "string.min" : "password phải có ít nhất {#limit} ký tự",
        "string.max" : "password không được vượt quá {#limit} ký tự",
    }),
});

module.exports = {
    signUpValidator,
    signInValidator,
}
