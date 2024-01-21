<template>
  <div v-if="props.circuit" class="card">
    <div class="logo">
      <Logo class="icon" />
    </div>
    <Logo class="icon" />
  </div>
</template>

<script setup lang="ts">
import { Circuit } from "@/types";
import { Logo } from "../assets/icons";

interface Props {
  circuit: Circuit | null;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.card {
  font-size: 1.2rem;
  width: 20em;
  aspect-ratio: 0.72/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
  overflow: hidden;
  .logo {
    background-color: #13181f;
    position: absolute;
    top: 0em;
    left: 0em;
    padding: 1em;
    height: 4.3em;
    width: 9.8em;
    clip-path: polygon(0% 0%, 100% 0%, 56% 100%, 0% 100%);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2.6em;

    .icon {
      width: 6.5em;
      height: auto;
      color: white;
      z-index: 2;
    }
  }
}
</style>
