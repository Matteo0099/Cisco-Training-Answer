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
import { createRouter, createMemoryHistory } from 'vue-router'
// all pages
const cap1 = () => import('./views/cap1.vue')
const cap2 = () => import('./views/cap2.vue')
const cap3 = () => import('./views/cap3.vue')
const cap4 = () => import('./views/cap4.vue')
const cap5 = () => import('./views/cap5.vue')
const cap6 = () => import('./views/cap6.vue')
const cap7 = () => import('./views/cap7.vue')
const cap8 = () => import('./views/cap8.vue')
const cap9 = () => import('./views/cap9.vue')
const cap10 = () => import('./views/cap10.vue')
const cap11 = () => import('./views/cap11.vue')
const cap12 = () => import('./views/cap12.vue')
const cap13 = () => import('./views/cap13.vue')
const cap14 = () => import('./views/cap14.vue')

const router = createRouter({
  history: createMemoryHistory(),
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