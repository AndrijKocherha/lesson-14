import { filterProduct } from '../helper/index.js'
export default {
   namespaced: true,
   state: {
      productsList: [
         {
            id: 1,
            title: 'Спагеті',
            price: 52,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/60556987.jpg',
         },
         {
            id: 2,
            title: 'Сир Чеддер',
            price: 298,
            imgSrc: 'https://content2.rozetka.com.ua/goods/images/big/180512103.png',
         },
         {
            id: 3,
            title: 'Салямі',
            price: 665,
            imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/39212067.png',
         },
         {
            id: 4,
            title: 'Хліб',
            price: 32,
            imgSrc: 'https://content1.rozetka.com.ua/goods/images/big/173133475.png',
         },
      ],
      filterObj: {},
   },
   getters: {
      productsList: ({ productsList, filterObj }) => {
         return productsList.filter((product) => filterProduct(product, filterObj))
      },
   },
   mutations: {
      updateFilterObj(state, filterObj) {
         state.filterObj = filterObj
      },
      addNewProduct(state, product) {
         state.productsList.push({ ...product, id: new Date().getTime() })
      },
   },
   actions: {
      updateFilterObj({ commit }, filterObj) {
         commit('updateFilterObj', filterObj)
      },
      addNewProduct({ commit }, product) {
         commit('addNewProduct', product)
      },
   },
   modules: {},
}
