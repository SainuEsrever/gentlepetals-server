const express = require('express');
const { signUp, signIn, changeProfile } = require('../controllers/authCtrl');
const authRouter = express.Router()

const checkPermission = require('../middlewares/checkPermission');

authRouter.post('/signup', signUp)
authRouter.post('/signin', signIn)


module.exports = authRouter