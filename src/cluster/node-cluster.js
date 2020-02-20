import cluster from 'cluster'

const _nodeWorkers = []

const initializeCluster = () => {
	const cores = require('os').cpus().length

	for (let i = 0; i < cores; i++) {
		_nodeWorkers.push(cluster.fork())
	}
}
