import { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { useToast } from './useToast'

const STORE_NAME = 'loading'
interface StateLoading {
  loadingObj?: Record<string, boolean>
}

const useLoading = defineStore(STORE_NAME, {
  state: (): StateLoading => {
    return {
      loadingObj: undefined,
    }
  },
  getters: {
    isLoading: (state) => {
      if (state.loadingObj) {
        const isLoading = Object.keys(state.loadingObj).every(
          (key) => state.loadingObj?.[key]
        )
        return isLoading
      }
      return undefined
    },
  },
  actions: {
    updateLoading(data: StateLoading['loadingObj']) {
      this.loadingObj = { ...this.loadingObj, ...data }
    },
    async loadingwrapper(
      callback: () =>
        | Promise<void>
        | Promise<AxiosResponse<any, any>>
        | AxiosResponse<any, any>,
      loading: string
    ) {
      this.loadingObj = { ...this.loadingObj, [loading]: true }
      try {
        await callback()
      } catch (err) {
        const storeToast = useToast()
        storeToast.updateToast([
          {
            type: 'danger',
            message: 'error',
          },
        ])
        console.log(err)
        return Promise.reject(err)
      } finally {
        this.loadingObj = { ...this.loadingObj, [loading]: false }
      }
    },
  },
})

export { useLoading }
