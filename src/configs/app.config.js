const configs = {
	APP_URL: process.env.APP_URL || 'http://localhost',
	ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || '8080',
	CLUSTER: Boolean(process.env.NODE_ENV === 'production') || false,

	// Database config
	DB_NAME: process.env.DB_NAME || 'socketdb',
	DB_USER: process.env.DB_USER || 'ce-admin-staging',
	DB_PASSWORD: process.env.DB_PASSWORD || 'codereternity33557799',
	DB_PORT: process.env.DB_PORT || 27017,
	DB_HOST: process.env.DB_HOST || 'ce-staging-achq9.mongodb.net',
}

export default configs
