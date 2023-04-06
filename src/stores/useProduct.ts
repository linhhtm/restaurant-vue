import { IProduct } from 'components'
import { defineStore } from 'pinia'
// import { useLoading } from './useLoading'
import { productService } from 'services'
import { handleApi } from 'services/API'

const STORE_NAME = 'product'
const LOADING_PRODUCT = {
  PRODUCT_LIST: 'product_list',
}

interface StateProduct {
  list?: IProduct[]
  favoriteObj: Record<IProduct['id'], IProduct>
}

const useProduct = defineStore(STORE_NAME, {
  state: (): StateProduct => {
    return {
      favoriteObj: {},
      list: undefined,
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
      if (this.favoriteObj[data.id]) {
        delete this.favoriteObj[data.id]
      } else {
        this.favoriteObj[data.id] = data
      }
    },
    async getList() {
      const res = await productService.getProductList()
      this.list = res.data?.products
    },
  },
})

export { useProduct, LOADING_PRODUCT }
