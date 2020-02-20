import cluster from 'cluster'
import express from 'express'
import configs from './configs/app.config'
import initializeCluster from './cluster/node-cluster'
import initializeExpress from './cluster/node-express'

const app = express()

;(() => {
	return configs.CLUSTER && cluster.isMaster ? initializeCluster() : initializeExpress(app)
})()
