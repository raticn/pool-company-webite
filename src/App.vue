<script>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue';
import Nav from './views/Nav.vue';

export default {
  components: {
    Home,
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
