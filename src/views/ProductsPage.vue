<template>
   <main-master-page>
      <template #title>
         <h3>Оберіть продукт</h3>
      </template>
      <template #navigation>
         <div class="products-sub-block">
            <div class="products-sub-block__navigation">
               <router-link :to="{ name: 'products-filter' }">Фільрація </router-link>
               <router-link :to="{ name: 'product-editor' }">Новий товар</router-link>
            </div>
            <router-view></router-view>
         </div>
      </template>
      <template #main-content>
         <div class="items-list">
            <product-item v-for="product in productsList" :key="product.id" :productData="product" />
         </div>
      </template>
   </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterPages/MainMasterPage.vue'
import { mapGetters } from 'vuex'
import ProductItem from '@/components/ProductItem.vue'
export default {
   name: 'ProductsPage',
   components: { MainMasterPage, ProductItem },
   computed: {
      ...mapGetters('products', ['productsList']),
   },
}
</script>

<style lang="scss" scoped>
.products-sub-block {
   &:not(:last-child) {
      margin-bottom: 20px;
   }
   &__navigation {
      margin-bottom: 20px;
      display: flex;
      gap: 10px;
      justify-content: center;
      color: #000;
      font-size: 18px;
   }
}
</style>
