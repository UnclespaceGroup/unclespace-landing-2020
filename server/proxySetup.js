const httpProxy = require('http-proxy')

module.exports = (app) => {
  const proxy = httpProxy.createProxyServer()
  app.disable('x-powered-by')
  proxy.on('error', (err, req, res) => {
    console.log('Error', err.message)
    res.end()
  })
}
