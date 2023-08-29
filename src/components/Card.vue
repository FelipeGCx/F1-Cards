<script setup lang="ts">
import { onMounted, ref } from "vue";
import { DevelopmentProvider } from "../services/requestAdapter/developmentProvider";
import { RequestService } from "../services/requestAdapter/requestService";
import { DRIVER, SUCCESS } from "../constants";
import { Driver } from "../types/driver";

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.0001 0 120 30"
      class="icon"
      fill="currentColor"
    >
      <path
        d="M 89.9999 30 L 119.9999 0 L 101.9437 0 L 71.9443 30 L 89.9999 30 Z M 85.6987 13.065 L 49.3818 13.065 C 38.3137 13.065 36.3768 13.6519 31.6362 18.3925 C 27.2024 22.8263 20.0006 30 20.0006 30 L 35.7324 30 L 39.4856 26.2469 C 41.9531 23.7794 43.2256 23.5237 48.4068 23.5237 L 75.2406 23.5237 L 85.6987 13.065 Z M 31.1518 16.2531 C 27.8774 19.3425 20.7531 26.2631 16.9131 30 L -0.0001 30 C -0.0001 30 13.5524 16.4869 21.0849 9.0725 C 28.8456 1.685 32.7143 0 46.9487 0 L 98.7643 0 L 87.5449 11.2188 L 48.0012 11.2188 C 37.9993 11.2188 35.7518 11.9119 31.1518 16.2531 Z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.0001 0 120 30"
      class="iconBack"
      fill="currentColor"
    >
      <path
        d="M 89.9999 30 L 119.9999 0 L 101.9437 0 L 71.9443 30 L 89.9999 30 Z M 85.6987 13.065 L 49.3818 13.065 C 38.3137 13.065 36.3768 13.6519 31.6362 18.3925 C 27.2024 22.8263 20.0006 30 20.0006 30 L 35.7324 30 L 39.4856 26.2469 C 41.9531 23.7794 43.2256 23.5237 48.4068 23.5237 L 75.2406 23.5237 L 85.6987 13.065 Z M 31.1518 16.2531 C 27.8774 19.3425 20.7531 26.2631 16.9131 30 L -0.0001 30 C -0.0001 30 13.5524 16.4869 21.0849 9.0725 C 28.8456 1.685 32.7143 0 46.9487 0 L 98.7643 0 L 87.5449 11.2188 L 48.0012 11.2188 C 37.9993 11.2188 35.7518 11.9119 31.1518 16.2531 Z"
      />
    </svg>
    <img :src="driver.picture" class="picture" />
    <div class="names">
      <!-- <picture v-html="driver.team.scudery.icon" class="team-icon"> </picture> -->
      <img :src="driver.team.scudery.icon" alt="" class="team-icon" />
      <picture v-html="driver.country.flag" class="country"> </picture>
      <p class="firstname">{{ driver.firstname }}</p>
      <p class="lastname">{{ driver.lastname }}</p>
    </div>
    <div class="information"></div>
    <div class="details">
      <img :src="driver.helmet" alt="" class="helmet" />
      <img :src="driver.number.icon" alt="" class="number" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 20rem;
  aspect-ratio: 0.72/1;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  position: relative;
  overflow: hidden;
  .iconBack {
    position: absolute;
    width: 64rem;
    height: auto;
    color: #1f1f24;
    z-index: 1;
    top: 0%;
    right: -43%;
  }
  .icon {
    position: absolute;
    width: 16rem;
    height: auto;
    color: white;
    z-index: 2;
    top: 3%;
    left: 6%;
  }
  .picture {
    position: absolute;
    width: 33rem;
    height: auto;
    z-index: 3;
    right: -37%;
    top: 3%;
  }
  .details {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 4;
    top: 24%;
    left: 0;
    .helmet {
      width: 6rem;
      height: auto;
    }
    .number {
      position: absolute;
      width: 5rem;
      height: auto;
      right: -3rem;
      bottom: -1rem;
    }
  }
  .names {
    background-color: #1f1f24;
    width: 15rem;
    height: 3.5rem;
    display: grid;
    z-index: 5;
    color: white;
    text-transform: capitalize;
    padding: 0.4rem;
    position: absolute;
    left: 0;
    bottom: 10rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: 50% 50%;
    .team-icon {
      width: 3.5rem;
      grid-area: 1/1/3/2;
      margin: auto;
      margin-left: 0;
    }
    .firstname {
      grid-area: 1/2/2/3;
      font-family: "f1R";
      font-size: 1.2rem;
      margin: auto;
      margin-left: 0;
    }
    .lastname {
      grid-area: 2/2/3/4;
      font-family: "f1W";
      margin: auto;
      margin-left: 0;
    }
    .country {
      grid-area: 1/3/2/4;
      width: 1.5rem;
      display: flex;
      place-items: center;
      margin-left: .4rem;
    }
  }
  .information {
    position: absolute;
    background-color: #333333;
    z-index: 4;
    width: inherit;
    padding: 1.2rem;
    bottom: 0;
    height: 10rem;
    .fullname {
      text-transform: capitalize;
      color: white;
      font-family: "f1W";
    }
  }
  //   &::before {
  //     content: "";
  //     background: rgb(0, 255, 213);
  //     background: linear-gradient(
  //       25deg,
  //       rgba(0, 255, 213, 1) 0%,
  //       rgba(10, 146, 131, 1) 35%,
  //       rgba(0, 255, 239, 1) 67%,
  //       rgba(13, 188, 185, 1) 100%
  //     );
  //     border-radius: 1.2rem;
  //     position: absolute;
  //     width: 25rem;
  //     aspect-ratio: 16/7;
  //     z-index: 1;
  //     transform: skewX(-45deg);
  //     top: -9%;
  //     left: -18%;
  //     outline: 1.5rem solid #e2e2e2;
  //   }
  //   &::after {
  //     content: "";
  //     background: rgb(0, 255, 213);
  //     background: linear-gradient(
  //       25deg,
  //       rgba(0, 255, 213, 1) 0%,
  //       rgba(10, 146, 131, 1) 35%,
  //       rgba(0, 255, 239, 1) 67%,
  //       rgba(13, 188, 185, 1) 100%
  //     );
  //     border-radius: 1.2rem;
  //     position: absolute;
  //     width: 35rem;
  //     aspect-ratio: 16/7;
  //     z-index: 0;
  //     transform: skewX(-45deg);
  //     top: 1%;
  //     left: -42%;
  //   }
}
</style>
