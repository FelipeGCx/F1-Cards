<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TEAM, SUCCESS, DRIVER, TEAMS, DRIVERS } from "./constants";
import { RequestService } from "./services/requestAdapter/requestService";
import { DevelopmentProvider } from "./services/requestAdapter/developmentProvider";
import { Driver, Team } from "./types";
import CardDriver from "./components/CardDriver.vue";
import CardTeam from "./components/CardTeam.vue";

const team = ref<Team | null>(null);
const driver = ref<Driver | null>(null);
const drivers = ref<Driver[] | null>(null);
const teams = ref<Team[] | null>(null);

onMounted(async () => {
  team.value = await getData<Team>(TEAM);
  teams.value = await getData<Team[]>(TEAMS);
  driver.value = await getData<Driver>(DRIVER);
  drivers.value = await getData<Driver[]>(DRIVERS);
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
    <!-- <CardDriver :driver="driver" /> -->
    <!-- <CardTeam :team="team" /> -->
    <ul class="drivers" >
      <li v-for="d in drivers" :key="d.id">
        <CardDriver :driver="d" />
      </li>
    </ul>
    <ul class="cars" >
      <li v-for="t in teams" :key="t.id">
        <CardTeam :team="t" />
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
.cars{
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}
.drivers{
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}
</style>
