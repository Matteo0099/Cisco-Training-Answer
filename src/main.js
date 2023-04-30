import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

//Create router
import { createRouter, createWebHistory } from 'vue-router'
// all pages
import cap1 from './views/cap1.vue'
//cap1
//cap2
//cap3
//cap4
//...
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/App',
      name: 'App',
      component: App
    },
    {
      path: '/cap1',
      name: 'cap1',
      component: cap1
    },
  ]
})

//Create the app
createApp(App).use(router).mount('#app')