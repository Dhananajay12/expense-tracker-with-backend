const mongoose = require('mongoose')

function connections(){

	mongoose.connect("mongodb+srv://dhananjay:dhananjay@cluster0.rqk9e.mongodb.net/task-backend?retryWrites=true&w=majority")
		.then(() => console.log("Succesfully conntected"))
		.catch((err) => console.log(err))
}

module.exports.connections = connections