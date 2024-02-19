<template>
   <div>
      <header class="header">
         <nav>
            <router-link to="/">На головну</router-link>
         </nav>
      </header>
      <main class="main">
         <div class="information">
            <h3 class="information__title"><slot name="title">Наші Контакти</slot></h3>
            <slot name="content">
               <ul class="information__list">
                  <li>Адреса магазину : Біля будинку баби Галі</li>
                  <li>Менеджер : Дід Петро</li>
                  <li>Заступник : Онука Софійка</li>
               </ul>
            </slot>
         </div>
         <div class="galery">
            <h4 class="galery__title">Галерея</h4>
            <div class="galery__list">
               <div v-for="galeryItem in galeryList" :key="galeryItem.id">
                  <img :src="galeryItem.imgSrc" alt="" />
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   naem: 'InfoMasterPage',
   computed: {
      ...mapGetters('galery', ['galeryList']),
   },
}
</script>

<style lang="scss" scoped>
.header {
}
.main {
}
.information {
   &__list {
      display: grid;
      gap: 10px;
   }
}
.galery {
   // .galery__title
   &__title {
   }
   &__list {
      display: grid;

      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      div {
         img {
            max-width: 100%;
         }
      }
   }
}
</style>
