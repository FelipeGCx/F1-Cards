<template>
   <ul class="scuderies">
    <li v-for="scudery in scuderis" :key="scudery.id">
      <CardScudery :scudery="scudery" />
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

</style>