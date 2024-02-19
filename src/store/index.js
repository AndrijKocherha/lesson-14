import { createStore } from 'vuex'
import products from './modules/products.js'
import suppliers from './modules/suppliers.js'
import galery from './modules/galery.js'
export default createStore({
   state: {
      shopStatus: 'Відкрито',
      shopRating: '54449',
   },
   getters: {
      shopStatus: ({ shopStatus }) => shopStatus,
      shopRating: ({ shopRating }) => shopRating,
   },
   mutations: {},
   actions: {},
   modules: {
      products,
      suppliers,
      galery,
   },
})
