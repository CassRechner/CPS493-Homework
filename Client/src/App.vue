<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import { ref } from 'vue';

</script>

<template>
  <header>
      <NavBar />
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}

.container {
  box-shadow: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  min-height: 100vh;
}

header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
</style>