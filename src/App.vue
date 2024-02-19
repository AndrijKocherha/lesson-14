<template>
   <router-view />
</template>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   //-webkit-font-smoothing: antialiased;
   //-moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
}

nav {
   padding: 30px;

   a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
         color: #42b983;
      }
   }
}
.items-list {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   gap: 20px;
}
</style>
