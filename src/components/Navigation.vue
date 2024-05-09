<template>
  <ul>
    <li v-for="route in routes" :key="route.name">
      <router-link v-if="route.path !== '/'" :to="{ name: route.name }">{{
        route.name
      }}</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import router from "@/router";

const routes = router.getRoutes();
</script>

<style scoped lang="scss">
ul {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  background-color: #3f3f3f;
  justify-content: center;
  li {
    a {
      cursor: pointer;
      color: white;
      text-transform: capitalize;
      &.router-link-active{
        color: #00F9FF;
      }
    }
  }
}
</style>
