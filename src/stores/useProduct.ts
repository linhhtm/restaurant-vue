import { IProduct } from 'components'
import { defineStore } from 'pinia'
import { productService } from 'services'
import { IPaginator } from 'type'
import { useLoading } from './useLoading'

const STORE_NAME = 'product'
const LOADING_PRODUCT = {
  LIST: 'product_list',
  DETAIL: 'product_detail',
}

interface StateProduct {
  list?: IProduct[]
  favoriteObj: Record<IProduct['idMeal'], IProduct>
  detail: IProduct
}

const useProduct = defineStore(STORE_NAME, {
  state: (): StateProduct => {
    return {
      favoriteObj: {},
      list: undefined,
      detail: {} as IProduct,
    }
  },
  getters: {
    favoriteList: (state) => {
      let arr: IProduct[] = []
      Object.keys(state.favoriteObj).forEach((key) => {
        arr.push(state.favoriteObj[key])
      })
      return arr
    },
  },
  actions: {
    updateFavoriteObj(data: IProduct) {
      if (this.favoriteObj[data.idMeal]) {
        delete this.favoriteObj[data.idMeal]
      } else {
        this.favoriteObj[data.idMeal] = data
      }
    },
    async getList(data?: IPaginator) {
      const storeLoading = useLoading()
      const res = await storeLoading.loadingwrapper(
        () => productService.getProductList(data),
        LOADING_PRODUCT.LIST
      )
      this.list = res?.data?.products
    },
    async getDetail(id: IProduct['idMeal']) {
      const storeLoading = useLoading()
      const res = await storeLoading.loadingwrapper(
        () => productService.getProductDetail(id),
        LOADING_PRODUCT.DETAIL
      )
      this.detail = res?.data
    },
  },
})

export { useProduct, LOADING_PRODUCT }
