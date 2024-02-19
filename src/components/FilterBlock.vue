<template>
   <div class="filter-block">
      <label>
         Введіть назву товару
         <input v-model="filterObj.title" type="text" />
      </label>
      <label>
         Введіть ціну від
         <input v-model.lazy="filterObj.priceFrom" type="number" />
      </label>
      <label>
         Введіть ціну до
         <input v-model.lazy="filterObj.priceTo" type="number" />
      </label>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'FilterBlock',
   data() {
      return {
         filterObj: {},
      }
   },
   methods: {
      ...mapActions('products', ['updateFilterObj']),
   },
   watch: {
      filterObj: {
         handler(newFilterObj) {
            this.updateFilterObj(newFilterObj)
         },
         deep: true,
      },
   },
}
</script>

<style lang="scss" scoped></style>
