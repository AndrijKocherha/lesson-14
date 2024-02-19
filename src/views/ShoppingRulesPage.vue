<template>
   <div>
      <info-master-page>
         <template #title>Правила купівлі</template>
         <template #content>
            <ul>
               <li class="information__list"></li>
               <li>Купуємо багато</li>
               <li>Платимо швидко</li>
               <li>насолоджуємось товаром</li>
            </ul>
         </template>
      </info-master-page>
   </div>
</template>

<script>
import InfoMasterPage from '@/masterPages/InfoMasterPage.vue'
export default {
   components: { InfoMasterPage },
   name: 'ShoppingRulesPage',
}
</script>

<style lang="scss" scoped></style>
