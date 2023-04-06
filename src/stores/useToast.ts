import { defineStore } from 'pinia'
import { TToast } from 'components'

const STORE_NAME = 'toast'

export interface IToast {
  type: TToast
  message: string
}

interface StateToast {
  toasts: IToast[]
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
  },
})

export { useToast }
