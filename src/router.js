import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: loadPage('MyEditPage'),
    beforeEnter: authGuard
  },
  {
    path: '/Profile/:id',
    name: 'CreatorProfile',
    component: loadPage('ProfilePage'),
    beforeEnter: authGuard
  },
  {
    path: '/Search',
    name: 'SearchPage',
    component: loadPage('SearchPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
