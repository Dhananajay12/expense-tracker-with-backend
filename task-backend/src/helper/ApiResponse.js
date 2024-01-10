const APIConstants = {
	Status: {
		Success: 'Success',
		Warning: 'Warning',
		Failure: 'Failure',
	},
	StatusCode: {
		Ok: 200,
		NoContent: 204,
		BadRequest: 400,
		NotFound: 404,
		ExistingData: 409,
		InternalServerError: 500,
		ServiceUnavailable: 503,
	},
	Message: {},
	Error: {},
};

 const customResponse = (message, statusCode, statusMessage, data, error) => {

	if (statusMessage === APIConstants.Status.Failure && (!message || !error)) {
		console.log('\u001b[1;31m Error and Message are required for Failure response!');
		message = message || error;
		error = message || error;

	} else if (statusMessage === APIConstants.Status.Warning && !message) {
		console.log('\u001b[1;31m At least Message is required for Warning response!');
		
	} else if (!data && !message) {
		console.log('\u001b[1;31m Sending Message is required when no data in response!');
	}

	return {
		message: message,
		statusMessage: statusMessage,
		statusCode: statusCode,
		data: data,
		error: error
	};
};

module.exports = { APIConstants , customResponse}