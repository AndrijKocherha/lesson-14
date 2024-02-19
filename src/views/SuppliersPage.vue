<template>
   <main-master-page>
      <template #title>Оберіть постачальника</template>
      <template #main-content>
         <div class="items-list">
            <product-item v-for="supplier in suppliersList" :key="supplier.id" :productData="supplier">
               <div class="product__delvery-icons">
                  <img v-for="(method, indx) in supplier.deliveryMethodIcons" :key="indx" :src="method" alt="" />
               </div>
            </product-item>
         </div>
      </template>
      <template #footer-left>
         <div>Найбільг популярний: {{ getTheMostPopularSupplier }}</div>
      </template>
   </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterPages/MainMasterPage.vue'
import ProductItem from '@/components/ProductItem.vue'
import { mapGetters } from 'vuex'
export default {
   name: 'SuppliersPage',
   components: { MainMasterPage, ProductItem },
   computed: {
      ...mapGetters('suppliers', ['suppliersList', 'getTheMostPopularSupplier']),
   },
}
</script>

<style lang="scss" scoped>
.product__delvery-icons {
   display: flex;
   gap: 20px;
   img {
      max-width: 40px;
   }
}
</style>
