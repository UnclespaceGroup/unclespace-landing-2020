const express = require('express')
const path = require('path')

const reactApp = require('./app').default
const clientStats = require('./webpack-stats')
const proxySetup = require('./proxySetup')

const host = process.env.HOST || 'localhost'
const serverPort = process.env.PORT || process.env.REACT_APP_PORT || 8090

process.env.REACT_APP_HOST = host
process.env.REACT_APP_PORT = serverPort

const app = express()
const staticPath = path.join(__dirname, '../client')

proxySetup(app)
app.use('/', express.static(staticPath, { index: false }))

app.use(reactApp({ clientStats }))

app.listen(serverPort, host, () => {
  console.log(`Listening at http://${host}:${serverPort}`)
})
