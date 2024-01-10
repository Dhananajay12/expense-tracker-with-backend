const { customResponse, APIConstants } = require("../../helper/ApiResponse");
const User = require("../../model/User");



const loginController = async (email, password) => {

	try {
		const data = await User.findOne({ email: email })

		if (!data) throw new Error("user not found");

		if (data.password != password) throw new Error("Invalid credentials");

		return customResponse("login Successfully", APIConstants.StatusCode.Ok, APIConstants.Status.Success, data, '')
	} catch (err) {
		return customResponse("Error while login", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}
}


const registerController = async (fullName, email, password) => {
	try {

		if (!fullName || !email || !password) throw new Error('please provide all fields');

		const userData = await User.create({ fullName, email, password })

		return customResponse("Successfully register ", APIConstants.StatusCode.Ok, APIConstants.Status.Success, userData, '')
  
	} catch (err) {
		return customResponse("Error while creating user", APIConstants.StatusCode.BadRequest, APIConstants.Status.Failure, {}, err.message)
	}
}

module.exports = {
	loginController,
	registerController
}