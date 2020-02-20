import http from 'http'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
// import session from 'express-session'

import configs from '../configs/app.config'
import databaseConnection from '../configs/mongo.config'

const initializeExpress = app => {
	app.server = http.createServer(app)

	app.use(bodyParser.json())
	app.use(helmet())
	app.use(cors())
	app.use(morgan('dev'))

	app.server.listen(configs.PORT, () => {
		console.log()
		console.group(`🚕🚕🚕 Initialize server...`)

		console.log(`🚀 Your server running on ${configs.APP_URL}:${configs.PORT}`)
		console.groupEnd()

		console.log()
		databaseConnection()
	})
}

export default initializeExpress
