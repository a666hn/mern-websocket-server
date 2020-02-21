import http from 'http'
import configs from './app.config'
import databaseConnection from './mongo.config'

const run = app => {
	app.server = http.createServer(app)
	return app.server.listen(configs.PORT, () => {
		console.log()
		console.group(`🚕🚕🚕 Initialize server...`)

		console.log(`🚀 Your server running on ${configs.APP_URL}:${configs.PORT}`)
		console.groupEnd()

		console.log()
		databaseConnection()
	})
}

export default run
