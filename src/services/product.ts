import { ENDPOINTS } from 'appConstants'
import API from './API'

export const productService = {
  getProductList: () => {
    return Promise.reject('error')
    // return API.get(ENDPOINTS.PRODUCT)
  },
}
