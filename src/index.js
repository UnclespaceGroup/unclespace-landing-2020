import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'services/configureStore'
import * as serviceWorker from 'services/serviceWorker'
import App from './App'
import ElasticAdaptive from 'HOC/ElasticAdaptive'
import './styles/styles.scss'
import './static/roboto/stylesheet.css'
const store = configureStore()

const Page = (
  <Provider store={store}>
    <BrowserRouter>
      <ElasticAdaptive>
        <App />
      </ElasticAdaptive>
    </BrowserRouter>
  </Provider>
)

const isSSR = process.env.REACT_APP_SSR === 'true'
const renderMethod = isSSR ? hydrate : render
const element = document.getElementById('root')

renderMethod(Page, element)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
