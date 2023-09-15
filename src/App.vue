<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TEAM, SUCCESS, DRIVER, TEAMS } from "./constants";
import { RequestService } from "./services/requestAdapter/requestService";
import { DevelopmentProvider } from "./services/requestAdapter/developmentProvider";
import { Driver, Team } from "./types";
import CardDriver from "./components/CardDriver.vue";
import CardTeam from "./components/CardTeam.vue";

const team = ref<Team | null>(null);
const driver = ref<Driver | null>(null);
const teams = ref<Team[] | null>(null);

onMounted(async () => {
  team.value = await getData<Team>(TEAM);
  teams.value = await getData<Team[]>(TEAMS);
  driver.value = await getData<Driver>(DRIVER);
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

<template>
  <div>
    <CardDriver :driver="driver" />
    <CardTeam :team="team" />
    <ul>
      <li v-for="t in teams" :key="t.id">
        <CardTeam :team="t" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
