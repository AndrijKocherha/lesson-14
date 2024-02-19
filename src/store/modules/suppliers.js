export default {
   namespaced: true,
   state: {
      suppliersList: [
         {
            id: 1,
            title: 'Політ',
            imgSrc: 'https://pngbuy.com/wp-content/uploads/2023/08/butterfly-png-3-400x400.png',
            deliveryMethodIcons: [
               'https://cdn-icons-png.flaticon.com/512/75/75689.png',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Plane_icon_nose_up.svg/1016px-Plane_icon_nose_up.svg.png',
            ],
            usesCount: 130,
         },
         {
            id: 2,
            title: 'Надійність',
            imgSrc:
               'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1280px-Superman_shield.svg.png',
            deliveryMethodIcons: ['https://cdn-icons-png.flaticon.com/512/75/75689.png'],
            usesCount: 110,
         },
         {
            id: 3,
            title: 'Швидка',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/uk/6/66/Detroit_Red_Wings.png',
            deliveryMethodIcons: [
               'https://cdn-icons-png.flaticon.com/512/75/75689.png',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Plane_icon_nose_up.svg/1016px-Plane_icon_nose_up.svg.png',
            ],
            usesCount: 90,
         },
         {
            id: 4,
            title: 'Економ',
            imgSrc: 'https://www.psdstamps.com/wp-content/uploads/2019/11/grunge-best-price-label-png.png',
            deliveryMethodIcons: [
               'https://cdn-icons-png.flaticon.com/512/75/75689.png',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Golf_Cart_Icon_%E2%84%961.svg/1200px-Golf_Cart_Icon_%E2%84%961.svg.png',
            ],
            usesCount: 350,
         },
      ],
   },
   getters: {
      suppliersList: ({ suppliersList }) => suppliersList,
      getTheMostPopularSupplier: ({ suppliersList }) => {
         return suppliersList.reduce((maxSupplier, currentSupplier) => {
            return currentSupplier.usesCount > maxSupplier.usesCount ? currentSupplier : maxSupplier
         }, suppliersList[0]).title
      },
   },
   mutations: {},
   actions: {},
   modules: {},
}
