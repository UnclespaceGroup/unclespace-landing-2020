import ElasticAdaptive from 'HOC/ElasticAdaptive'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import render from './render'
import App from '../src/App'
import configureStore from 'services/configureStore'
import { Provider } from 'react-redux'
import MobileDetect from 'mobile-detect'
import NestedStatus from 'react-nested-status'
import { SizesProvider } from 'react-sizes'
import { clearChunks, flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'

const isDevelopment = process.env.NODE_ENV !== 'production'

const getSizesFallback = userAgent => {
  const md = new MobileDetect(userAgent)

  if (md.mobile()) {
    return {
      fallbackHeight: 640,
      fallbackWidth: 360
    }
  } else if (md.tablet()) {
    return {
      fallbackHeight: 700,
      fallbackWidth: 800
    }
  }
  return {
    fallbackHeight: 700,
    fallbackWidth: 1280
  }
}

const reactApp = ({ clientStats }) => async (req, res) => {
  try {
    const store = configureStore()
    const context = {} // context for static router
    const time = Date.now() // to track render time in log
    let status // result status
    let appHTML // result component from renderToString

    clearChunks()

    const sizesConfig = getSizesFallback(req.headers['user-agent'])

    const result = renderToString(
      <NestedStatus code={200}>
        <SizesProvider config={sizesConfig}>
          <Provider store={store}>
            <ElasticAdaptive>
              <Router context={context}
                location={req.url}
              >
                <App />
              </Router>
            </ElasticAdaptive>
          </Provider>
        </SizesProvider>
      </NestedStatus>
    )

    if (context.url) {
      res.redirect(301, context.url)
    } else {
      appHTML = result
      status = NestedStatus.rewind()
      const flushOptions = { chunkNames: flushChunkNames() }
      // console.log(clientStats)
      // console.log(flushOptions)
      const { js, styles, cssHash } = flushChunks(clientStats, flushOptions)
      const reduxState = store.getState().toJS() // get state to transfer to client
      const helmet = Helmet.renderStatic() // get SEO
      const HTML = render({ appHTML, cssHash, helmet, reduxState, scripts: js, styles }) // get result HTML
      res.status(status).send(HTML)
    }
    if (isDevelopment) {
      console.log(
        `render url ${req.url} in ${Date.now() - time} ms with renders and API loadings`
      )
    }
  } catch (e) {
    console.error(e)
    res.status(500).send('Server Error')
  }
}

export default reactApp
