import { IPost } from 'components'
import { defineStore } from 'pinia'
import { postService } from 'services'
import { IPaginator } from 'type'
import { useLoading } from './useLoading'
import { ref } from 'vue'

const STORE_NAME = 'post'
const LOADING_POST = {
  LIST: 'post_list',
  DETAIL: 'post_detail',
}

interface StatePost {
  list?: IPost[]
  total?: number
  detail?: IPost
}

const usePost = defineStore(STORE_NAME, () => {
  const list = ref<StatePost['list']>([])
  const total = ref<StatePost['total']>(0)
  const detail = ref<StatePost['detail']>()
  // const getters = computed(() => total * 2)

  const storeLoading = useLoading()
  const getList = async (data?: IPaginator) => {
    const res = await storeLoading.loadingwrapper(
      () => postService.getPostList(data),
      LOADING_POST.LIST
    )
    list.value = res?.data?.posts
    total.value = res?.data?.total
  }
  const getDetail = async (id: IPost['id']) => {
    const res = await storeLoading.loadingwrapper(
      () => postService.getPostDetail(id),
      LOADING_POST.DETAIL
    )
    detail.value = res?.data
  }
  return {
    list,
    total,
    detail,
    getList,
    getDetail,
  }
})
export { usePost, LOADING_POST }
