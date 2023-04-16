import { defineStore } from 'pinia'
import { TToast } from 'components'
import { TOAST_TIMEOUT } from 'appConstants'

const STORE_NAME = 'toast'

export interface IToast {
  type: TToast
  color: string
  message: string
}

interface StateToast {
  toasts: IToast[]
  timeout?: NodeJS.Timeout
}
const useToast = defineStore(STORE_NAME, {
  state: (): StateToast => {
    return {
      toasts: [],
    }
  },
  actions: {
    updateToast(data: StateToast['toasts']) {
      this.toasts = [...this.toasts, ...data]
    },
    deleteToast(index: number) {
      this.toasts.splice(index, 1)
      this.autoDeleteToast()
    },
    autoDeleteToast() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        const arr = [...this.toasts]
        arr.shift()
        this.toasts = arr
      }, TOAST_TIMEOUT)
    },
  },
})

export { useToast }
