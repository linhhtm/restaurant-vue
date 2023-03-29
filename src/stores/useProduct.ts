import { IProduct } from 'components'
import { defineStore } from 'pinia'

interface StateProduct {
  favoriteObj: Record<IProduct['id'], IProduct>
}

const useProduct = defineStore('product', {
  state: (): StateProduct => {
    return {
      favoriteObj: {},
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
  },
})

export default useProduct
