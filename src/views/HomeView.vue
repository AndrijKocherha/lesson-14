<template>
   <main-master-page>
      <template #main-content>
         <h1>Сподіваюсь ви не будете чемними і обовязково щось купите</h1>
      </template>
      <template #footer-right>
         <div class="footer__owner">
            Власник: Баба Галя
            <img src="../assets/images/grandma.avif" alt="" />
         </div>
      </template>
   </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterPages/MainMasterPage.vue'
// @ is an alias to /src

export default {
   components: { MainMasterPage },
   name: 'HomeView',
}
</script>

<style lang="scss" scoped>
.footer {
   &__owner {
      display: flex;
      align-items: center;
      gap: 20px;
   }
}
</style>
