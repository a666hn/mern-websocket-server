import mongoose from 'mongoose'
import configs from './app.config'

const isDev = Boolean(configs.ENV !== 'production')

const databaseUri = isDev
	? `mongodb+srv://${configs.DB_USER}:${configs.DB_PASSWORD}@${configs.DB_HOST}/${configs.DB_NAME}?retryWrites=true&w=majority`
	: 'Not set for production'

const databaseConnection = () => {
	mongoose
		.connect(databaseUri, {
			dbName: configs.DB_NAME,
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})
		.then(() => console.log('✅ Connection to mongodb Success...'))
		.catch(err => console.error('❌ Connection to mongodb failed. Message :>  ', err.message))
}

export default databaseConnection
