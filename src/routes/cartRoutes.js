const express = require('express');
const cartRouter = express.Router()

const cartCtrl = require('../controllers/cartCtrl');
const checkPermission = require('../middlewares/checkPermission');

cartRouter.get('/', cartCtrl.getAll)
cartRouter.get("/:id", cartCtrl.getDetail)

cartRouter.post('/create', checkPermission, cartCtrl.create)
cartRouter.put('/update/:id', checkPermission, cartCtrl.update)

module.exports = cartRouter