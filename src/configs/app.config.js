const configs = {
	APP_URL: process.env.APP_URL || 'http://localhost',
	ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || '8080',
	CLUSTER: Boolean(process.env.NODE_ENV === 'production') || false,
}

export default configs
