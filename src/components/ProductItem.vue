<template>
   <div class="product">
      <div class="product__image"><img :src="productData.imgSrc ?? newImage" alt="" /></div>
      <div class="product__content">
         <div class="product__title">{{ productData.title }}</div>
         <div class="product__data">
            <slot>
               <div>{{ productData.price }} грн</div>
            </slot>
         </div>
         <button>Купити</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'ProductItem',
   props: {
      productData: {
         type: Object,
         default: () => ({}),
      },
   },
   //productData.imgSrc ?? newImage
   data() {
      return {
         newImage: require('../assets/images/new.png'),
      }
   },
}
</script>

<style lang="scss" scoped>
.product {
   padding: 10px;
   border: 1px solid #29bd37;
   border-radius: 10px;
   display: grid;
   gap: 20px;
   grid-template-rows: 1fr auto auto;
   // .product__image
   &__image {
      position: relative;

      padding-bottom: 100%;

      img {
         position: absolute;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         object-fit: contain;
      }
   }
   // .product__content
   &__content {
   }
   // .product__title
   &__title {
      margin-bottom: 10px;
   }
   // .product__data
   &__data {
      margin-bottom: 20px;
   }
}
</style>
