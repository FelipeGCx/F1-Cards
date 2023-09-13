<script setup lang="ts">
import CardDriver from './components/CardDriver.vue'
import CardTeam from './components/CardTeam.vue'
</script>

<template>
  <div>
    <CardDriver />
    <CardTeam />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
