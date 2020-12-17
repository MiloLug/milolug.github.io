import { createRouter, createWebHistory } from 'vue-router'
import MainContainer from '../views/MainContainer.vue'
import Works from '../views/pages/Works.vue'
import About from '../views/pages/About.vue'
import Contacts from '../views/pages/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'MainContainer',
    component: MainContainer,
    children: [
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: Contacts
      },
      {
        path: '/',
        name: 'Works',
        component: Works,
        exact: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router