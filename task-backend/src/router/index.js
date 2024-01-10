const express = require('express');
const { router: authRouter } = require("./login")
const { router: expensesRouter } = require("./expensecurd")

const router = express.Router();


router.use('/auth', authRouter)
router.use('/expenses', expensesRouter)


module.exports = { router }