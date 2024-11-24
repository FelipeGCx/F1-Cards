<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { Scudery } from "@/types";

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
  background-color: white;
  position: relative;
  overflow: hidden;
}
</style>