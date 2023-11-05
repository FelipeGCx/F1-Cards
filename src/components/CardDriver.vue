<script setup lang="ts">
import { Driver } from "../types/driver";
import { Logo } from "../assets/icons";

interface Props {
  driver: Driver | null;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="card" v-if="props.driver"
    :style="`--color-team-primary: ${props.driver.team.color.primary}; --color-team-secondary: ${props.driver.team.color.secondary};`">
    <Logo class="icon" />
    <Logo class="iconBack" />
    <img :src="props.driver.picture" class="picture" />
    <div class="names">
      <picture v-html="props.driver.team.scudery.icon" class="team-icon">
      </picture>
      <div class="line"></div>
      <p class="firstname">{{ props.driver.firstname }}</p>
      <p class="lastname">{{ props.driver.lastname }}</p>
    </div>
    <div class="details">
      <img :src="props.driver.helmet" alt="" class="helmet" />
      <picture v-if="props.driver.number.icon.oneColor" v-html="props.driver.number.icon.oneColor" class="number">
      </picture>
      <img v-else :src="props.driver.number.icon.image" alt="" class="number" />
    </div>
    <div class="information">
      <div class="countryContainer">
        <picture v-html="props.driver.country.flag.widescreen" class="country">
        </picture>
      </div>
      <div>
        <p class="title">team:</p>
        <p class="data">{{ props.driver.team.scudery.name }}</p>
      </div>
      <div>
        <p class="title">podiums:</p>
        <p class="data">{{ props.driver.podiums }}</p>
      </div>
      <div>
        <p class="title">races:</p>
        <p class="data">{{ props.driver.races }}</p>
      </div>
      <div>
        <p class="title">victories:</p>
        <p class="data">{{ props.driver.victories }}</p>
      </div>
      <div>
        <p class="title">points:</p>
        <p class="data">{{ props.driver.points }}</p>
      </div>
      <div v-if="props.driver.signature" class="signature">
        <img :src="props.driver.signature">
      </div>
      <Logo class="iconInfoBack" />

    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  font-size: 1.2rem;
  width: 20em;
  aspect-ratio: 0.72/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
  overflow: hidden;

  .iconBack {
    position: absolute;
    width: 64em;
    height: auto;
    color: var(--color-team-primary);
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
    width: 28em;
    height: auto;
    z-index: 3;
    right: -8em;
    top: 0;
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
      color: white
    }
  }

  .names {
    background-color: #13181F;
    width: 16em;
    height: fit-content;
    display: grid;
    z-index: 5;
    color: white;
    text-transform: capitalize;
    padding: 0.2em;
    position: absolute;
    left: 0;
    bottom: 8em;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: auto auto;
    gap: 0 0.4em;

    .team-icon {
      width: 3.5em;
      grid-area: 1/1/3/2;
      margin: auto;
      margin-left: 0;
    }

    .line {
      grid-area: 1/2/3/2;
      background-color: gray;
      height: 70%;
      width: .1em;
      margin: auto;
      margin-right: 0.2em;
    }

    .firstname {
      grid-area: 1/3/2/3;
      font-family: "f1R";
      font-size: 1.1em;
      margin: auto auto 0 0;
      line-height: 1em;
    }

    .lastname {
      grid-area: 2/3/3/4;
      font-family: "f1B";
      font-size: 1.3em;
      margin: 0 auto auto 0;
      text-transform: uppercase;
      color: var(--color-team-secondary);
      line-height: 1.3em;

    }

    &::after {
      content: "";
      background-color: var(--color-team-secondary);
      height: 0.2em;
      width: 100%;
      display: block;
      position: absolute;
      bottom: 0;
    }
  }

  .information {
    position: absolute;
    background-color: #12151C;
    z-index: 4;
    width: inherit;
    padding: .35em .35em 1.2em 1.2em;
    bottom: 0;
    max-height: 10.4em;
    min-height: 10.4em;
    text-transform: capitalize;
    color: white;
    font-family: "f1R";
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: .2em;

    .countryContainer {
      display: flex;
      justify-content: end;
      width: 100%;
      height: fit-content;
      z-index: 1;
      padding-bottom: 1em;

      .country {
        display: flex;
        width: 4.2em;
        aspect-ratio: 16/9;
      }
    }

    .signature {
      position: absolute;
      height: 3.4em;
      width: 8.6em;
      padding: 0.4em 1em;
      padding-left: 3em;
      bottom: 0;
      right: 0;
      z-index: 2;
      background-color: white;
      justify-content: center;
      clip-path: polygon(32% 0, 100% 0, 100% 100%, 0% 100%);

      img {
        height: 100%;
        filter: grayscale(1);
      }
    }

    .iconInfoBack {
      position: absolute;
      bottom: 0;
      height: 100%;
      right: -4.2em;
      color: #1E2127;
      transform: rotateX(180deg);
      z-index: 0;
    }

    div {
      position: relative;
      display: flex;
      font-size: 0.8em;
      gap: 1em;
      height: 1.6em;
      justify-content: start;
      align-items: center;
      z-index: 1;

      p {
        width: 35%;
        font-size: 1.15em;

      }
    }
  }
}
</style>
