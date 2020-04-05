import axios from 'axios'
// import { SERVER_URL } from 'constants/serverUrl'

axios.defaults.baseURL = '/server'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const axiosInstanse = axios.create()
export const axiosLocalInstanse = axios.create()
