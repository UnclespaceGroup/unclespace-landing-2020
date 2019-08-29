// packages
import axios from 'axios'
import xmlJs from 'xml-js'
// utils
import { isServer } from 'utils/index'

export const axiosAPI = axios.create({
  baseURL: isServer ? process.env.REACT_APP_API_URL : '/api/',
  withCredentials: false
})

export const axiosSamo = axios.create({
  baseURL: isServer ? `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/samo/` : '/samo/',
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  method: 'post',
  transformRequest: (data) => {
    if (typeof data === 'object' && data !== null) {
      const params = Object.keys(data).map(key => {
        const paramName = key.toUpperCase()
        return `<${paramName}>${data[key]}</${paramName}>`
      })
      return `<data>${params.join('')}</data>`
    }
    return data
  }
})

export const axiosSoap = axios.create({
  baseURL: '/soap/',
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  method: 'post',
  responseType: 'text',
  transformResponse: (data) => {
    try {
      return xmlJs.xml2js(data, { compact: true }).WorkResponse
    } catch (e) {
      return undefined
    }
  }
})

export const axiosLocal = axios.create({
  baseURL: '/server/',
  // on dev server side get local data from client webpack server
  proxy: isServer
    ? {
      host: 'localhost',
      port: parseInt(process.env.REACT_APP_PORT) || 8090
    }
    : undefined,
  withCredentials: true
})
