<template>
  <nav>
    <Navigation />
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
</script>
<style lang="scss">
main {
  margin: 2rem;
}
</style>
