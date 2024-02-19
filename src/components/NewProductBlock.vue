<template>
   <div>
      <label>
         Введіть назву товару
         <input v-model="productObj.title" type="text" />
      </label>
      <label>
         Введіть ціну товару
         <input v-model="productObj.price" type="number" />
      </label>
      <button @click="createNewProduct">Створити</button>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'NewProductBlock',
   data() {
      return {
         productObj: {
            title: null,
            price: null,
         },
      }
   },
   methods: {
      ...mapActions('products', ['addNewProduct']),
      createNewProduct() {
         if (this.checkProductData()) {
            this.addNewProduct(this.productObj)
            this.productObj = {
               title: null,
               price: null,
            }
         }
      },
      checkProductData() {
         for (const prod in this.productObj) {
            if (!this.productObj[prod]) return false
         }
         return true
      },
   },
}
</script>

<style lang="scss" scoped></style>
