<template>
  <ul class="drivers">
    <li v-for="driver in drivers" :key="driver.id">
      <CardDriver :driver="driver" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { SUCCESS, DRIVERS } from "@/constants";
import { Driver } from "@/types";
import CardDriver from "@/components/CardDriver.vue";
import { DevelopmentProvider, RequestService } from "@/services/requestAdapter";

const drivers = ref<Driver[] | null>(null);

onMounted(async () => {
  drivers.value = await getData<Driver[]>(DRIVERS);
  console.log(drivers.value);
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
.drivers {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
