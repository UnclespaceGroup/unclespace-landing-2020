const httpProxy = require('http-proxy')
const crypto = require('crypto')
const pako = require('pako')
const axios = require('axios')
const soapRequest = require('easy-soap-request')
const bodyParser = require('body-parser')

module.exports = (app) => {
  const clientUserName = process.env.REACT_APP_API_CLIENT_USERNAME
  const clientPassword = process.env.REACT_APP_API_CLIENT_PASSWORD
  const token = process.env.REACT_APP_SAMO_API_TOKEN

  // add current IP to use API
  axios({
    data: `TOKEN=${token}&USERNAME=${clientUserName}&PASSWORD=${clientPassword}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    url: 'http://searchtour.anextour.com/token.ip.update.php'
  }).catch(console.error)

  const proxy = httpProxy.createProxyServer()
  app.disable('x-powered-by')
  proxy.on('error', (err, req, res) => {
    console.log('Error', err.message)
    res.end()
  })
  // add proxy like this
  app.use('/api/', (req, res) => {
    proxy.web(req, res, { changeOrigin: true, target: process.env.REACT_APP_API_URL })
  })

  app.use('/samo/:method', bodyParser.text(), (req, res) => {
    const baseUrl = process.env.REACT_APP_SAMO_API_URL

    const data = req.body

    const method = req.params.method
    const url = `${baseUrl}?samo_action=api&version=1.0&oauth_token=${token}&type=json&action=${method}`

    return axios({ data, url })
      .then(({ data }) => {
        if (data[method]) data = data[method]
        if ('error' in data) res.status(400)
        res.send(data)
      })
      .catch((error) => {
        const { response: { status = 400, data } = {} } = error
        res.status(status).send(data)
      })
  })

  app.use('/soap/', bodyParser.text(), (req, res) => {
    const url = process.env.REACT_APP_SOAP_API_URL
    const username = process.env.REACT_APP_SOAP_API_USERNAME
    const password = process.env.REACT_APP_SOAP_API_PASSWORD

    let request
    try {
      const xml = req.body.replace('$$username$$', clientUserName).replace('$$password$$', clientPassword)
      request = createRequest(xml, username, password)
    } catch (e) {
      return res.status(500).end()
    }

    return soapRequest(url, {}, request, 15000)
      .then(({ response: { headers, body, statusCode } }) => {
        const resultXmlMatch = body.match(/<return[^>]*>([^<]*)<\/return>/)
        const resultXml = resultXmlMatch && resultXmlMatch[1]
        const result = decodeXml(resultXml, password)
        res.set(headers)
        res.status(statusCode).send(result)
      })
      .catch((error) => {
        console.log(error, 'error')
        res.status(500).end()
      })
  })
}

const encodeXml = (xml, key) => {
  const compressed = pako.gzip(xml, { level: 5 })
  const ctr = crypto.createCipheriv('aes-256-cbc', key, Buffer.alloc(16, 0))
  return ctr.update(compressed, 'binary', 'base64') + ctr.final('base64')
}

const decodeXml = (encodedXml, key) => {
  const dctr = crypto.createDecipheriv('aes-256-cbc', key, Buffer.alloc(16, 0))
  const compressed = dctr.update(encodedXml, 'base64', 'binary') + dctr.final('binary')
  return pako.ungzip(compressed, { to: 'string' })
}

const createRequest = (xml, username, password) => {
  const nonce = crypto.randomBytes(16).toString('hex')
  const created = new Date().toISOString().replace(/\.\d\d\dZ$/, 'Z')

  const shaPassword = crypto.createHash('sha1').update(nonce + created + password).digest('hex')
  const base64Password = Buffer.from(shaPassword).toString('base64')
  const base64Nonce = Buffer.from(nonce).toString('base64')

  return `
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
xmlns:ns6="http://www.samo.ru/xml" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
<SOAP-ENV:Header>
<wsse:Security SOAP-ENV:actor="http://schemas.xmlsoap.org/soap/actor/next" SOAP-ENV:mustUnderstand="0">
<wsse:UsernameToken>
<wsse:Username>${username}</wsse:Username>
<wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wssusername-token-profile-1.0#PasswordDigest">${base64Password}</wsse:Password>
<wsse:Nonce>${base64Nonce}</wsse:Nonce>
<wsse:Created>${created}</wsse:Created>
</wsse:UsernameToken>
</wsse:Security>
<ns6:agentinfo SOAP-ENV:actor="http://schemas.xmlsoap.org/soap/actor/next" SOAP-ENV:mustUnderstand="0">
<version>3.0</version>
</ns6:agentinfo>
</SOAP-ENV:Header>
  <SOAP-ENV:Body>
  <ns6:WORK>
  <data xsi:type="xsd:string">${encodeXml(xml, password)}</data>
  </ns6:WORK>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`.trim()
}
