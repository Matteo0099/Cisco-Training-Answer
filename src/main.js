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
const cap1Test = () => import('./views/cap1Test.vue')
const cap2Test = () => import('./views/cap2Test.vue')
const cap3Test = () => import('./views/cap3Test.vue')
const cap4Test = () => import('./views/cap4Test.vue')
const cap5Test = () => import('./views/cap5Test.vue')
const cap6Test = () => import('./views/cap6Test.vue')
const cap7Test = () => import('./views/cap7Test.vue')
const cap8Test = () => import('./views/cap8Test.vue')
const cap9Test = () => import('./views/cap9Test.vue')
const cap10Test = () => import('./views/cap10Test.vue')
const cap11Test = () => import('./views/cap11Test.vue')
const cap12Test = () => import('./views/cap12Test.vue')
const cap13Test = () => import('./views/cap13Test.vue')
const cap14Test = () => import('./views/cap14Test.vue')
//ccna
const module_1_3 = () => import('./views/module1-3.vue')
const module_4_7 = () => import('./views/module4-7.vue')
const module_8_10 = () => import('./views/module8-10.vue')
const module_11_13 = () => import('./views/module11-13.vue')
const module_14_15 = () => import('./views/module14-15.vue')
const module_16_17 = () => import('./views/module16-17.vue')
const finalExam = () => import('./views/module-FinalExam.vue')

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
      path: '/cap1Test',
      name: 'cap1Test',
      component: cap1Test
    },
    {
      path: '/cap2',
      name: 'cap2',
      component: cap2
    },
    {
      path: '/cap2Test',
      name: 'cap2Test',
      component: cap2Test
    },
    {
      path: '/cap3',
      name: 'cap3',
      component: cap3
    },
    {
      path: '/cap3Test',
      name: 'cap3Test',
      component: cap3Test
    },
    {
      path: '/cap4',
      name: 'cap4',
      component: cap4
    },
    {
      path: '/cap4Test',
      name: 'cap4Test',
      component: cap4Test
    },
    {
      path: '/cap5',
      name: 'cap5',
      component: cap5
    },
    {
      path: '/cap5Test',
      name: 'cap5Test',
      component: cap5Test
    },
    {
      path: '/cap6',
      name: 'cap6',
      component: cap6
    },
    {
      path: '/cap6Test',
      name: 'cap6Test',
      component: cap6Test
    },
    {
      path: '/cap7',
      name: 'cap7',
      component: cap7
    },
    {
      path: '/cap7Test',
      name: 'cap7Test',
      component: cap7Test
    },
    {
      path: '/cap8',
      name: 'cap8',
      component: cap8
    },
    {
      path: '/cap8Test',
      name: 'cap8Test',
      component: cap8Test
    },
    {
      path: '/cap9',
      name: 'cap9',
      component: cap9
    },
    {
      path: '/cap9Test',
      name: 'cap9Test',
      component: cap9Test
    },
    {
      path: '/cap10',
      name: 'cap10',
      component: cap10
    },
    {
      path: '/cap10Test',
      name: 'cap10Test',
      component: cap10Test
    },
    {
      path: '/cap11',
      name: 'cap11',
      component: cap11
    },
    {
      path: '/cap11Test',
      name: 'cap11Test',
      component: cap11Test
    },
    {
      path: '/cap12',
      name: 'cap12',
      component: cap12
    },
    {
      path: '/cap12Test',
      name: 'cap12Test',
      component: cap12Test
    },
    {
      path: '/cap13',
      name: 'cap13',
      component: cap13
    },
    {
      path: '/cap13Test',
      name: 'cap13Test',
      component: cap13Test
    },
    {
      path: '/cap14',
      name: 'cap14',
      component: cap14
    },
    {
      path: '/cap14Test',
      name: 'cap14Test',
      component: cap14Test
    },
    {
      path: '/module1-3',
      name: 'module1-3',
      component: module_1_3
    },
    {
      path: '/module4-7',
      name: 'module4-7',
      component: module_4_7
    },
    {
      path: '/module8-10',
      name: 'module8-10',
      component: module_8_10
    },
    {
      path: '/module11-13',
      name: 'module11-13',
      component: module_11_13
    },
    {
      path: '/module14-15',
      name: 'module14-15',
      component: module_14_15
    },
    {
      path: '/module16-17',
      name: 'module16-17',
      component: module_16_17
    },
    {
      path: '/module-FinalExam',
      name: finalExam,
      component: finalExam
    },
  ]
})

//Create the app
createApp(App).use(router).mount('#app')