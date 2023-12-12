const express = require('express');
const router = express.Router();

const authRouter = require('./authRoutes')

const categoriesRouter = require('./categoryRoutes')
const productRouter = require('./productRoutes')


router.get('/', (req, res) => {
    res.render('index');
})

router.use("/auth", authRouter)

router.use("/category", categoriesRouter)
router.use("/product", productRouter)

module.exports = router