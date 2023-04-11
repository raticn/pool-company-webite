<script>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue';
import Kontakt from './views/Kontakt.vue';
import Galerija from './views/Galerija.vue';

export default {
  components: {
    Home,
    Kontakt,
    Galerija,
  }
}
</script>

<template>
  <RouterView />
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
