import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsPage.vue'),
      children: [
         {
            path: 'selector',
            name: 'products-filter',
            component: () => import('../components/FilterBlock.vue'),
         },
         {
            path: 'editor',
            name: 'product-editor',
            component: () => import('../components/NewProductBlock.vue'),
         },
      ],
   },
   {
      path: '/suppliers',
      name: 'suppliers',
      component: () => import('../views/SuppliersPage.vue'),
   },
   {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsPage.vue'),
   },
   {
      path: '/shopping-rules',
      name: 'shopping-rules',
      component: () => import('../views/ShoppingRulesPage.vue'),
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
