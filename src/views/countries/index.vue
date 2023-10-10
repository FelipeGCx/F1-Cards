<template>
  <ul class="countries">
    <li v-for="c in countries" :key="c.id">
      <CardCountry :country="c" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { SUCCESS, COUNTRIES } from "@/constants";
import { Country } from "@/types";
import CardCountry from "@/components/CardCountry.vue";
import { DevelopmentProvider, RequestService } from "@/services/requestAdapter";

const countries = ref<Country[] | null>(null);

onMounted(async () => {
  countries.value = await getData<Country[]>(COUNTRIES);
  console.log(countries.value);
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
.countries {
  display: grid;
  gap: 1.2rem;
  flex-wrap: wrap;
  grid-template-columns: repeat(10, 1fr);
}
</style>
