import CareerOverview from '@/views/CareerOverview.vue'
import CompanyDetails from '@/views/CompanyDetails.vue'
import Hiring from '@/views/Hiring.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

// const history = createWebHistory(import.meta.env.BASE_URL)
const history = createWebHistory(import.meta.env.BASE_URL)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  {
    path: '/carrer-overview',
    name: 'careers',
    component: CareerOverview
  },
  {
    path: '/intern-hirings',
    name: 'hirings',
    component: Hiring,
    children: [
      {
        path: '/intern-hirings/:company',
        name: 'company hiring',
        params: 'company',
        component: CompanyDetails
      }
    ]
  }
]

const router = createRouter({
  history,
  routes,
  linkActiveClass: 'text-[#DF61A5]'
})

export default router
