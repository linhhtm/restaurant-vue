import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import 'vuetify/styles'
import './style.css'
import HelloWorldVue from './components/HelloWorld.vue'

const routes = [
  { path: '/home', component: HelloWorldVue },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#root')
