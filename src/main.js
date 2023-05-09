import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

//analytics vercel
import { inject } from '@vercel/analytics';
inject();

//aos
import AOS from 'aos'
import 'aos/dist/aos.css'
render: (h) => h(App)
AOS.init()

//Create router
import { createRouter, createWebHistory } from 'vue-router'
// all pages
import cap1 from './views/cap1.vue'
import cap2 from './views/cap2.vue'
import cap3 from './views/cap3.vue'
import cap4 from './views/cap4.vue'
import cap5 from './views/cap5.vue'
import cap6 from './views/cap6.vue'
import cap7 from './views/cap7.vue'
import cap8 from './views/cap8.vue'
import cap9 from './views/cap9.vue'
import cap10 from './views/cap10.vue'
import cap11 from './views/cap11.vue'
import cap12 from './views/cap12.vue'
import cap13 from './views/cap13.vue'
import cap14 from './views/cap14.vue'

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
    {
      path: '/cap2',
      name: 'cap2',
      component: cap2
    },
    {
      path: '/cap3',
      name: 'cap3',
      component: cap3
    },
    {
      path: '/cap4',
      name: 'cap4',
      component: cap4
    },
    {
      path: '/cap5',
      name: 'cap5',
      component: cap5
    },
    {
      path: '/cap6',
      name: 'cap6',
      component: cap6
    },
    {
      path: '/cap7',
      name: 'cap7',
      component: cap7
    },
    {
      path: '/cap8',
      name: 'cap8',
      component: cap8
    },
    {
      path: '/cap9',
      name: 'cap9',
      component: cap9
    },
    {
      path: '/cap10',
      name: 'cap10',
      component: cap10
    },
    {
      path: '/cap11',
      name: 'cap11',
      component: cap11
    },
    {
      path: '/cap12',
      name: 'cap12',
      component: cap12
    },
    {
      path: '/cap13',
      name: 'cap13',
      component: cap13
    },
    {
      path: '/cap14',
      name: 'cap14',
      component: cap14
    }
  ]
})

//Create the app
createApp(App).use(router).mount('#app')