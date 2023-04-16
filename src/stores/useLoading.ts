import { TOAST_COLOR } from 'appConstants'
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
        const isLoading = Object.keys(state.loadingObj).find(
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
      callApi: () =>
        | Promise<void>
        | Promise<AxiosResponse<any, any>>
        | AxiosResponse<any, any>,
      loadingName: string,
      callback?: () => void
    ) {
      this.loadingObj = { ...this.loadingObj, [loadingName]: true }
      console.log(this.loadingObj)
      try {
        const res = await callApi()
        typeof callback === 'function' && callback()
        return res
      } catch (err: any) {
        const storeToast = useToast()
        storeToast.updateToast([
          {
            type: 'danger',
            color: TOAST_COLOR['danger'],
            message: err?.message || 'Error',
          },
        ])
        console.log(err)
        return Promise.reject(err)
      } finally {
        this.loadingObj = { ...this.loadingObj, [loadingName]: false }
      }
    },
  },
})

export { useLoading }
