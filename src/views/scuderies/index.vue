<template>
   <ul class="scuderies">
    <li v-for="scudery in scuderies" :key="scudery.id">
      <CardScudery :scudery="scudery" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { SUCCESS, SCUDERIES } from "@/constants";
import { Scudery } from "@/types";
import CardScudery from "@/components/CardScudery.vue";
import { DevelopmentProvider, RequestService } from "@/services/requestAdapter";

const scuderies = ref<Scudery[] | null>(null);

onMounted(async () => {
  scuderies.value = await getData<Scudery[]>(SCUDERIES);
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
.scuderies {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
