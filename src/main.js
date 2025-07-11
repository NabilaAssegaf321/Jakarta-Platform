import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

// Import your pages
import Home from './pages/Home.vue'
import Dashboard from './pages/Dashboard.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount the app
const app = createApp(App)
app.use(router)
app.mount('#app'
