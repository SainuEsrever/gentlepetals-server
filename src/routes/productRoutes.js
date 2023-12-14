const express = require('express');
const productRouter = express.Router()

const productCtrl = require('../controllers/productCtrl');
const checkPermission = require('../middlewares/checkPermission');

productRouter.get('/', productCtrl.getAll)
productRouter.get("/:id", productCtrl.getDetail)
productRouter.get("/c/:categoryId", productCtrl.getListByCategory)
productRouter.post('/create', checkPermission, productCtrl.create)
productRouter.put('/update/:id', checkPermission, productCtrl.update)
productRouter.delete('/delete/:id', checkPermission, productCtrl.remove)

module.exports = productRouter