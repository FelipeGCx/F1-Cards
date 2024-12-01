<template>
  <div>
    <Logo :class="'iconBack'" />
  </div>
</template>

<script setup lang="ts">
import { Scudery } from "@/types";
import { Logo } from "@/assets/icons";

interface Props {
  scudery: Scudery | null;
}
defineProps<Props>();
</script>

<style scoped lang="scss">
.card {
  font-size: 1.5rem;
  width: 20em;
  aspect-ratio: 0.72/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  position: relative;
  overflow: hidden;
}
</style>
