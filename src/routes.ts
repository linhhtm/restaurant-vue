import { Home, ProductList, ProductDetail, PostDetail, PostList } from 'pages'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    name: 'products',
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
    path: '/search',
    name: 'search',
    component: ProductList,
  },
  {
    path: '/posts',
    name: 'posts',
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
