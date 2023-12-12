const { User } = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const { SECRET_CODE } = process.env

const { signUpValidator, signInValidator } = require('../validation/userValid')


module.exports = {
    signUp : async (req, res) => {
        try {
            // 1 - Validate 
            const { error } = signUpValidator.validate(req.body, {abortEarly: false})

            if(error){
                const errorMessages = error.details.map(err => err.message)
                return res.status(400).json({
                    message : errorMessages
                })

                // throw new Error(errorMessages)
            }

            // 2 - Kiểm tra email tồn tại
            const userExist = await User.findOne({email: req.body.email})

            if(userExist){
                return res.status(400).json({
                    message: "Email này đã được đăng ký!",
                })
            }

            // 3 - mã hóa password
            const hashPassword = await bcryptjs.hash(req.body.password, 10)

            // 4 - tạo user, lưu db
            const user = await User.create({
                ...req.body,
                password : hashPassword,
            })

            // 5 - thông báo : không gửi mật khẩu
            user.password = undefined

            return res.status(200).json({
                message: "Đăng Ký Thành Công",
                user
            })

        } catch (error) {
            return res.status(500).json({
                name : error.name,
                message: error.message,
            });
        }
    },

    signIn: async (req, res) => {
        try {
            // 1 - Validate nội dung gửi đến
            const { error } = signInValidator.validate(req.body, {abortEarly: false})
            if(error){
                const errorMessages = error.details.map(err => err.message)
                return res.status(400).json({
                    message : errorMessages
                })

                // throw new Error(errorMessages)
            }

            // 2 - Kiểm tra email 
            const user = await User.findOne({email: req.body.email})
            if(!user){
                return res.status(404).json({
                    message : "Email này chưa được đăng ký!"
                })
            }

            // 3 - kiểm tra password
            const isMatch = await bcryptjs.compare(req.body.password, user.password)
            if(!isMatch){
                return res.status(400).json({
                    message : "Mật khẩu không đúng !"
                })
            }

            // 4 - tạo jwt
            const accessToken = await jwt.sign({_id : user._id}, SECRET_CODE)

            // 5 - thông báo
            user.password = undefined
            return res.status(200).json({
                message: "Đăng Nhập Thành Công",
                user,
                accessToken

            })

        } catch (error) {
            return res.status(500).json({
                name : error.name,
                message: error.message,
            });
        }
    },

    changeProfile : async (req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, req.body, {new : true})

            if(!data) {
                return res.status(404).json({
                    message: "Chỉnh sửa profile không thành công"
                })
            }
    
            return res.status(200).json({
                message: "Update success",
                datas : data
            })
        } catch (error) {
            return res.status(500).json({
                name : error.name,
                message : error.message
            })
        }
    }
}