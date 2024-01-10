const express = require('express');
const {  getExpenseData, createExpenseData, deleteExpenses } = require('./controller');
const router = express.Router();

router.post('/create', async (req, res) => {
	const { id, amount , expDate, category } = req.body
	const response = await createExpenseData( id ,amount, expDate, category)
	res.json(response);
})

router.delete('/deleteExpense/:id', async (req, res) => {
	const response = await deleteExpenses(req.params.id)
	res.json(response);
})

router.get('/getExpenses', async (req, res) => {
	const response = await getExpenseData()
	res.json(response);
})




module.exports = { router }