import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Dashboard from './views/Dashboard.vue'
import Register from './views/Register.vue'
import Welcome from './views/Welcome.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/register', component: Register },
  { path: '/welcome', component: Welcome}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).mount('#app')

const app = createApp(App)
app.use(router)

app.mount('#app')
