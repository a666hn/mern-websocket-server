const whitelist = ['http://localhost:3000']
const corsOpt = {
	credentials: true,
	origin: (origin, callback) => {
		if (whitelist.includes(origin)) return callback(null, true)
		callback(new Error('Not allowed by cors'))
	},
}

export default corsOpt
