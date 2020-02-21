import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
// import session from 'express-session'

import socketConnection from '../configs/socket.config'

const initializeExpress = app => {
	app.use(bodyParser.json())
	app.use(helmet())
	app.use(morgan('dev'))

	socketConnection(app)
}

export default initializeExpress
