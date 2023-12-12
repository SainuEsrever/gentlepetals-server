const express = require('express');
const productRouter = express.Router()

const product = require('../controllers/productCtrl');
const checkPermission = require('../middlewares/checkPermission');

productRouter.get('/', product.getAll)
productRouter.get("/:id", product.getDetail)
productRouter.get("/c/:categoryId", product.getListByCategory)
productRouter.post('/', checkPermission, product.create)
productRouter.put('/:id', checkPermission, product.update)
productRouter.delete('/:id', checkPermission, product.remove)

module.exports = productRouter