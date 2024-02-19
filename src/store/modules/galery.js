export default {
   namespaced: true,
   state: {
      galery: [
         {
            id: 1,
            imgSrc:
               'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         },
         {
            id: 1,
            imgSrc:
               'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         },
         {
            id: 1,
            imgSrc:
               'https://images.pexels.com/photos/3028500/pexels-photo-3028500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
         },
         {
            id: 1,
            imgSrc: 'https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_1280.jpg',
         },
      ],
   },
   getters: {
      galeryList: ({ galery }) => galery,
   },
   mutations: {},
   actions: {},
   modules: {},
}
