import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

//analytics vercel
import { inject } from '@vercel/analytics';
inject();

//confetti animation
import VueConfetti from 'vue-confetti'

//aos
import AOS from 'aos'
import 'aos/dist/aos.css'
render: (h) => h(App)
AOS.init()

//Create router
import { createRouter, createWebHistory } from 'vue-router'
// all pages
const Test = () => import('./views/Test.vue')
const Answers = () => import('./views/Answers.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/answers/:type/:number',
      name: 'Answers',
      component: Answers,
      props: true
    },
    {
      path: '/test/:type/:number',
      name: 'Test',
      component: Test,
      props: true
    }
  ]
})

//Create the app
createApp(App).use(router).use(VueConfetti).mount('#app')
