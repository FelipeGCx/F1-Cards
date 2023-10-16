<template>
  <div v-if="props.country" class="card">
    <picture
      v-if="props.country.flag.fullscreen"
      class="fs"
      v-html="props.country.flag.fullscreen"
    ></picture>
    <picture
      class="ws"
      v-if="props.country.flag.widescreen"
      v-html="props.country.flag.widescreen"
    ></picture>
    <h3>{{ props.country.name }}</h3>
    <p>{{ props.country.iso }}</p>
  </div>
</template>

<script setup lang="ts">
import { Country } from "@/types";

interface Props {
  country: Country | null;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  picture {
    height: 3rem;
    display: block;
    margin: auto;
    border-radius: 0.5rem;
    overflow: hidden;
    &.fs {
      aspect-ratio: 4/3;
    }
    &.ws {
      aspect-ratio: 16/9;
    }
  }
  h3 {
    text-align: center;
  }
}
</style>
