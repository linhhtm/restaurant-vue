import { PATHS, PATH_NAME } from 'appConstants/paths'

const Home = () => import('pages/home/Home.vue')
const Error = () => import('pages/error/Error.vue')
const ProductList = () => import('pages/product/ProductList.vue')
const ProductDetail = () => import('pages/product/ProductDetail.vue')
const PostList = () => import('pages/post/PostList.vue')
const PostDetail = () => import('pages/post/PostDetail.vue')

const routes = [
  {
    path: '',
    name: PATHS.HOME,
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*', // Unrecognized path automatically matches 404
    name: PATH_NAME.ERROR,
    component: Error,
  },
  {
    path: PATHS.PRODUCTS,
    name: PATH_NAME.PRODUCT,
    children: [
      {
        path: '',
        component: ProductList,
      },
      {
        path: ':id',
        component: ProductDetail,
      },
    ],
  },
  {
    path: PATHS.SEARCH,
    name: PATH_NAME.SEARCH,
    component: ProductList,
  },
  {
    path: PATHS.POSTS,
    name: PATH_NAME.POST,
    children: [
      {
        path: '',
        component: PostList,
      },
      {
        path: ':id',
        component: PostDetail,
      },
    ],
  },
]

export default routes
