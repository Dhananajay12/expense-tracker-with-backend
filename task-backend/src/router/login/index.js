
const express = require('express');
const { loginController, registerController } = require('./controller');
const router = express.Router();

router.post('/login', async (req, res) => {
	const { email, password } = req.body
	const response = await loginController(email, password)
	res.json(response);
})

router.post('/register', async (req, res) => {

	const { fullName , email, password } = req.body
	const response = await registerController(fullName, email, password)
	res.json(response);
})


module.exports =  { router }