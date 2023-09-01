<script setup lang="ts">
import { onMounted, ref } from "vue";
import { DevelopmentProvider } from "../services/requestAdapter/developmentProvider";
import { RequestService } from "../services/requestAdapter/requestService";
import { DRIVER, SUCCESS } from "../constants";
import { Driver } from "../types/driver";
import {Logo, Graph} from "../assets/icons";

const driver = ref<Driver>();

onMounted(() => {
  getDriver(DRIVER);
});

const getDriver = async (url: string) => {
  const requestProvider = new DevelopmentProvider();
  const requestService = new RequestService(requestProvider);
  const requestResponse = await requestService.getRequest(url);
  switch (requestResponse.status) {
    case SUCCESS:
      driver.value = requestResponse.data.results;
      break;
    default:
      break;
  }
};
</script>

<template>
  <div class="card" v-if="driver">
    <Logo :class="'icon'"/>
    <Logo :class="'iconBack'"/>
    <img :src="driver.picture" class="picture" />
    <div class="names">
      <!-- <picture v-html="driver.team.scudery.icon" class="team-icon"> </picture> -->
      <img :src="driver.team.scudery.icon" alt="" class="team-icon" />
      <picture v-html="driver.country.flag" class="country"> </picture>
      <p class="firstname">{{ driver.firstname }}</p>
      <p class="lastname">{{ driver.lastname }}</p>
    </div>
    <div class="details">
      <img :src="driver.helmet" alt="" class="helmet" />
      <img :src="driver.number.icon" alt="" class="number" />
    </div>
    <div class="information">
      <Graph :class="'graph'"/>
      <Graph :class="'graph'"/>
      <div>
        <p class="title">team:</p>
        <p class="data">{{ driver.team.scudery.name }}</p>
      </div>
      <div>
        <p class="title">podiums:</p>
        <p class="data">{{ driver.podiums }}</p>
      </div>
      <div>
        <p class="title">races:</p>
        <p class="data">{{ driver.races }}</p>
      </div>
      <div>
        <p class="title">victories:</p>
        <p class="data">{{ driver.victories }}</p>
      </div>
      <div>
        <p class="title">points:</p>
        <p class="data">{{ driver.points }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  font-size: 2rem;
  width: 20em;
  aspect-ratio: 0.72/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  position: relative;
  overflow: hidden;
  .iconBack {
    position: absolute;
    width: 64em;
    height: auto;
    color: #1f1f24;
    z-index: 1;
    top: 0em;
    right: -12em;
  }
  .icon {
    position: absolute;
    width: 16em;
    height: auto;
    color: white;
    z-index: 2;
    top: 1em;
    left: 1em;
  }
  .picture {
    position: absolute;
    width: 33em;
    height: auto;
    z-index: 3;
    right: -10em;
    top: 1em;
  }
  .details {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 4;
    top: 7.2em;
    left: 0em;
    .helmet {
      width: 6em;
      height: auto;
    }
    .number {
      position: absolute;
      width: 5em;
      height: auto;
      right: -3em;
      bottom: -1em;
    }
  }
  .names {
    background-color: #1f1f24;
    width: 15em;
    height: fit-content;
    display: grid;
    z-index: 5;
    color: white;
    text-transform: capitalize;
    padding: 0.4em;
    position: absolute;
    left: 0;
    bottom: 7.8em;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: 50% 50%;
    .team-icon {
      width: 3.5em;
      grid-area: 1/1/3/2;
      margin: auto;
      margin-left: 0;
    }
    .firstname {
      grid-area: 1/2/2/3;
      font-family: "f1R";
      font-size: 1.2em;
      margin: auto;
      margin-left: 0;
    }
    .lastname {
      grid-area: 2/2/3/4;
      font-family: "f1B";
      font-size: 1.2em;
      margin: auto;
      margin-left: 0;
      text-transform: uppercase;
    }
    .country {
      grid-area: 1/3/2/4;
      width: 1em;
      display: flex;
      place-items: center;
      margin-left: 0.8em;
      transform: scaleX(1.5);
    }
  }
  .information {
    position: absolute;
    background-color: #333333;
    z-index: 4;
    width: inherit;
    padding: 3.3em 1.2em 1.2em 1.2em;
    bottom: 0;
    max-height: 10em;
    min-height: 10em;
    text-transform: capitalize;
    color: white;
    font-family: "f1R";
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .graph {
      position: absolute;
      height: 100%;
      top: 0;
      color: rgb(110 110 110 / 70%);
      z-index: 0;
      &:nth-child(1) {
        transform: rotateY(180deg);
        right: -2em;
      }
      &:nth-child(2) {
        left: -2em;
      }
    }
    div {
      position: relative;
      font-size: 0.8em;
      display: flex;
      gap: 0.8em;
      height: 1.6em;
      justify-content: center;
      align-items: center;
      p {
        width: 50%;
      }
    }
  }
}
</style>
