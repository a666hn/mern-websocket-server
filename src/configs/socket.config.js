import cors from 'cors'
import run from './run.config'
import corsOpt from './origin.config'
import Route from '../routers/api.v1'

const socketConnection = app => {
	const io = require('socket.io').listen(run(app), {
		origins: 'http://localhost:3000/',
	})

	// io.on('connection', socket => {
	// 	console.log('🚀 Client connected to websocket...')
	// })
	app.use((req, res, next) => {
		req.io = io
		next()
	})

	app.use(cors(corsOpt))

	app.use('/api/v1/secure', Route)
}

export default socketConnection
