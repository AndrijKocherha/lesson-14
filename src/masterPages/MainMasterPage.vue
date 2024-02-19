<template>
   <div class="wrapper">
      <header class="header">
         <nav>
            <router-link to="/">Голоіна</router-link> | <router-link :to="{ name: 'products' }">Продукти</router-link> |
            <router-link :to="{ name: 'suppliers' }">Постачальники</router-link> |
         </nav>
      </header>
      <main class="main">
         <slot class="main__title" name="title"></slot>
         <slot name="navigation"></slot>
         <slot name="main-content"></slot>
      </main>
      <footer class="footer">
         <div class="footer__container">
            <div class="footer__left">
               <slot name="footer-left">
                  <div>Рейтинг магазину: {{ shopRating }}</div>
               </slot>
            </div>
            <div class="footer__right">
               <slot name="footer-right">
                  <div>Статус магазину: {{ shopStatus }}</div>
               </slot>
            </div>
         </div>
         <div class="footer-links">
            <router-link :to="{ name: 'contacts' }">Контакти</router-link>
            <router-link :to="{ name: 'shopping-rules' }">Правила купівлі</router-link>
         </div>
      </footer>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   name: 'MainMasterPage',
   computed: {
      ...mapGetters(['shopStatus', 'shopRating']),
   },
}
</script>

<style lang="scss" scoped>
.wrapper {
}
.main {
}
.footer {
   font-size: 20px;
   &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
}
.footer-links {
   display: flex;
   gap: 20px;
}
</style>
