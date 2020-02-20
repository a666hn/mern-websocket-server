import cluster from 'cluster'

const _nodeWorkers = []

const initializeCluster = () => {
	console.log()
	console.group('🚕🚕🚕 Initialize Cluster...')

	// Get how much core in cpu
	const cores = require('os').cpus().length
	console.log(`🛠  Setting up cluster with : ${cores} worker(s)`)
	console.log()

	// Iterating number of cores
	for (let i = 0; i < cores; i++) {
		// Create fork and push into node workers
		_nodeWorkers.push(cluster.fork())

		// Receive message from node workers
		_nodeWorkers[i].on('message', message => console.log('💌 Workers : ', message))
	}

	// Catch status when cluster is online
	cluster.on('online', worker => {
		console.log()
		console.log('🚀 Worker online with pid :' + worker.process.pid + ' status : 🚥 "Listening"')
	})

	// Catch status when cluster offline/crash
	cluster.on('exit', (worker, code, signal) => {
		console.log(`❌ Worker with PID : ${worker.process.pid} died! With code : ${code} and signal : ${signal}`)

		console.log('🔥 Starting new worker...')

		// Retry to fork cluster
		cluster.fork()
		_nodeWorkers.push(cluster.fork())

		// Catch status when success re-connect with new worker(s)
		_nodeWorkers[_nodeWorkers.length - 1].on('message', message => console.log(`💌 Workers : ${message}`))
	})

	console.groupEnd()
}

export default initializeCluster
