const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	expDate: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		enum: ['transportation', 'shopping', 'food']
	}
}, { timestamps: true })


const Expenses  = mongoose.model('Expenses', expensesSchema);

module.exports = Expenses
