import { Home, ProductList } from 'pages'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/product',
    name: 'product',
    children: [
      {
        path: ':id',
        component: Home,
      },
    ],
  },
  {
    path: '/search',
    name: 'search',
    component: ProductList,
  },
]

export default routes
