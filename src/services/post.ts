import { ENDPOINTS } from 'appConstants'
import { API2 } from './API'
import { IPaginator } from 'type'
import { IPost } from 'components'

export const postService = {
  getPostList: async (data?: IPaginator) => {
    // return Promise.reject('error')
    const { search, page = 0, size = 0 } = data || {}
    const res = await API2.get(ENDPOINTS.POST)
    const posts = search
      ? res.data?.posts?.filter(
          (el: IPost) =>
            el.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
      : res.data?.posts
    return {
      ...res,
      data: {
        total: posts.length,
        posts: posts.slice(!page ? 0 : size, size * (page + 1)),
      },
    }
  },
  getPostDetail: async (id: IPost['id']) => {
    // return Promise.reject('error')
    const res = await API2.get(ENDPOINTS.POST)
    const post = res.data?.posts?.find((el: IPost) => el.id === Number(id))
    return {
      ...res,
      data: post,
    }
  },
}
