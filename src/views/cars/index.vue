<template>
  <ul class="cars">
    <li v-for="t in teams" :key="t.id">
      <CardTeam :team="t" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { SUCCESS, TEAMS } from "@/constants";
import { Team } from "@/types";
import CardTeam from "@/components/CardTeam.vue";
import { DevelopmentProvider, RequestService } from "@/services/requestAdapter";

const teams = ref<Team[] | null>(null);

onMounted(async () => {
  teams.value = await getData<Team[]>(TEAMS);
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
.cars {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
