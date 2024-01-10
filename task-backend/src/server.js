const express =  require('express');
const { connections } = require('./connection');
const http  = require('http');
const { router } = require('./router');
// authencatorMiddleware
const cors = require("cors");
connections();

const app = express();
const server = http.createServer(app)

app.use(express.json())
app.use(cors())

app.use('/api/v3', router)


server.listen(4000, async () => {
	console.log('listing on port 4000');
})