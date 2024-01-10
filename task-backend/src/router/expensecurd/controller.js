const { customResponse, APIConstants } = require("../../helper/ApiResponse")
const Expenses = require("../../model/Expenses")


const createExpenseData = async (id, amount, expDate, category) => {

	try {
		const data =  await Expenses.create({ id,  amount, expDate, category })


		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, data, '')
	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}



const getExpenseData = async () => {

	try {
		const data = await Expenses.find().sort({ _id: -1 })


		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, data, '')
	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}


const deleteExpenses = async (id) => {

	try {
		const data = await Expenses.deleteOne({ id: id })

		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, data, '')
	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}

}



module.exports = { createExpenseData, getExpenseData, deleteExpenses }