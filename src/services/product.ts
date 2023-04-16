import { IProduct } from 'components'
import { API } from './API'
import { IPaginator } from 'type'

export const productService = {
  getProductList: async (data?: IPaginator) => {
    const { search } = data || {}
    const res = await API.get(`search.php?${search ? `s=${search}` : 'f=b'}`)
    return { ...res, data: { products: res.data?.meals } }
  },
  getProductDetail: async (id: IProduct['idMeal']) => {
    const res = await API.get(`lookup.php?i=${id}`)
    return { ...res, data: res.data?.meals?.[0] }
  },
}
