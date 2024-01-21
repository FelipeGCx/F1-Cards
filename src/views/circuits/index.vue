<template>
  <ul class="circuits">
    <li v-for="circuit in circuits" :key="circuit.id">
      <CardCircuit :circuit="circuit" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { SUCCESS, CIRCUITS } from "@/constants";
import { Circuit } from "@/types";
import CardCircuit from "@/components/CardCircuit.vue";
import { DevelopmentProvider, RequestService } from "@/services/requestAdapter";

const circuits = ref<Circuit[] | null>(null);

onMounted(async () => {
  circuits.value = await getData<Circuit[]>(CIRCUITS);
});

const getData = async <T>(url: string): Promise<T | null> => {
  const requestProvider = new DevelopmentProvider();
  const requestService = new RequestService(requestProvider);
  const requestResponse = await requestService.getRequest(url);
  switch (requestResponse.status) {
    case SUCCESS:
      return requestResponse.data.results as T;
    default:
      return null;
  }
};
</script>

<style scoped>
.circuits {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}
</style>
