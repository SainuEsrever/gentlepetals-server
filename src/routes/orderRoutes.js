const express = require('express');
const orderRouter = express.Router()

const orderCtrl = require('../controllers/orderCtrl');
const checkPermission = require('../middlewares/checkPermission');

orderRouter.get('/', orderCtrl.getAll)
orderRouter.get("/:id", orderCtrl.getDetail)

orderRouter.post('/create', checkPermission, orderCtrl.create)
orderRouter.put('/update/:id', checkPermission, orderCtrl.update)
orderRouter.put('/delete/:id', checkPermission, orderCtrl.remove)

module.exports = orderRouter