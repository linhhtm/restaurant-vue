import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueFeather from 'vue-feather';

import App from './App.vue'
import routes from './routes'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.component(VueFeather.name, VueFeather)
app.use(router).mount('#root')