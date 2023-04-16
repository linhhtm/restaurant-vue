import Axios from 'axios'
import { CONFIG } from 'appConstants'

const axios = Axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

const axios2 = Axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

axios.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
)

axios.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)

axios2.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
)

axios2.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)

const API = {
  get: (endpoint: string, params = {}) => axios.get(endpoint, { params }),
}

const API2 = {
  get: (endpoint: string, params = {}) => axios2.get(endpoint, { params }),
}

export { API, API2 }
