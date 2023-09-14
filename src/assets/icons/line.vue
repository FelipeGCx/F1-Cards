<template>
  <svg
    :class="props.class"
    viewBox="0 0 396 345"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M78.1213 121.5L25.1213 68.5H68.1213L1.56065 1.93934L0 0.378693V4.62133L60.8787 65.5H17.8787L76.8787 124.5H118.879L241.879 247.5L196.879 292.5H266.621L298.621 260.5H387.879L306.879 341.5H131.621L175.621 297.5H64.5V300.5H168.379L124.379 344.5H308.121L395.121 257.5H297.379L265.379 289.5H204.121L246.121 247.5L120.121 121.5H78.1213Z"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  class: string;
}

const props = defineProps<Props>();
</script>
