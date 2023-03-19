import { Home } from 'pages'

const routes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/product',
        children: [
            {
                path: ':id',
                component: Home
            }
        ]
    }
]

export default routes