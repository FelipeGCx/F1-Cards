<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'countries' }">Countries</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'drivers' }">Drivers</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'cars' }">Cars</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'circuits' }">Circuits</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
