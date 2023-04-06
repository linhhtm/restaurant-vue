import Axios, { AxiosResponse } from 'axios'
import { CONFIG } from 'appConstants'
import { useToast } from 'stores'

const axios = Axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
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

const API = {
  get: (endpoint: string, params = {}) => axios.get(endpoint, { params }),
}

export default API
