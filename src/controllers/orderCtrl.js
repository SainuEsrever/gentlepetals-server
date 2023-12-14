const { Order } = require('../models/Order')
const { orderValidator } = require('../validation/orderValid')


// const multer = require('multer')

// const { upload } = require('../multer')


module.exports = {
    getAll: async (req, res) => {
        try {

            const data = await Order.find({}).populate("accountId")

            if (!data.docs || data.docs.length === 0) {
                res.status(404).json({ message: "Không tìm thấy Order nào cả !" })
            }
            res.status(200).json({
                message: "Tìm thấy Order rồi !",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: error,
            })
        }
    },

    getDetail: async (req, res) => {
        try {
            const data = await Order.findById(req.params.id)
            if (!data) {
                res.status(404).json({ message: "Không tìm thấy Blog nào cả !" })
            }
            res.status(200).json({
                message: "Tìm thấy Blog sau !",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: error,
            })
        }
    },

    create: async (req, res) => {
        try {

            const { error } = OrderValidator.validate(req.body)

            if (error) {
                return res.status(400).json({
                    message: error.details[0].message
                })
            }

            const data = await Order.create({
                ...req.body,
            })

            if (!data) {
                res.status(404).json({ message: "Tạo Blog không thành công" })
            }

            return res.status(200).json({
                message: "Tạo Blog thành công",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: error,
            })
        }
    },

    update: async (req, res) => {
        try {

            const { error } = OrderValidator.validate(req.body, { abortEarly: false })
            if (error) {
                return res.status(400).json({
                    message: error.details[0].message
                })
            }

            const data = await Order.findByIdAndUpdate(req.params.id, {
                ...req.body,
            }, {
                new: true,
            })

            if (!data) {
                res.status(404).json({ message: "Sửa Blog không thành công" })
            }

            return res.status(200).json({
                message: "Sửa thành công",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: error.message,
            })
        }
    },

    remove: async (req, res) => {
        try {
            const data = await Order.findByIdAndDelete(req.params.id)
            if (!data) {
                return res.status(400).json({
                    message: "Không tìm thấy sản phẩm"
                })
            }
            return res.status(200).json({
                message: "Xóa sản phẩm thành công",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: error,
            })
        }
    }
}