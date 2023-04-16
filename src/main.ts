import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueFeather from 'vue-feather'
import './style.css'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const pinia = createPinia()

const app = createApp(App)
app.component(VueFeather.name, VueFeather)
app.use(router).use(pinia).mount('#root')
