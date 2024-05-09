<template>
  <div v-if="props.circuit" class="card">
    <div class="logo">
      <Logo class="icon" />
    </div>
    <div class="countryContainer">
      <picture v-html="props.circuit.country.flag.widescreen" class="country">
      </picture>
    </div>
    <div class="city">{{ props.circuit.city.name }}</div>
    <div class="laps">laps: {{ props.circuit.laps }}</div>
    <div class="year">{{ props.circuit.debut }}</div>
    <Logo class="iconBack" />
    <img :src="props.circuit.image" alt="" class="circuitImage" />
    <div class="name">
      <p class="firstname">{{ props.circuit.name }}</p>
    </div>
    <div class="info">
      <p>
        <span>Distance</span><span>{{ props.circuit.distance.km }}KM</span>
      </p>
      <p>
        <span>Length</span><span>{{ props.circuit.length.km }}KM</span>
      </p>
      <p>
        <span>Turns</span
        ><span>
          {{
            `${props.circuit.turns.total} / ${props.circuit.turns.left} Left / ${props.circuit.turns.right} Right`
          }}
        </span>
      </p>
      <p>
        <span>Type</span><span>{{ props.circuit.type }}</span>
      </p>
      <Logo class="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Circuit } from "@/types";
import { Logo } from "../assets/icons";

interface Props {
  circuit: Circuit | null;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.card {
  font-size: 1.5rem;
  width: 20em;
  aspect-ratio: 0.72/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
  overflow: hidden;
  .logo {
    background-color: #13181f;
    position: absolute;
    top: 0em;
    left: 0em;
    padding: 1em 2.4em 1em 0.5em;
    height: 3.6em;
    width: 8.6em;
    clip-path: polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2.6em;

    .icon {
      width: 6.5em;
      height: auto;
      color: white;
      z-index: 2;
    }
  }
  &::after {
    content: "";
    background-color: white;
    position: absolute;
    top: 0em;
    left: 0em;
    height: 3.8em;
    width: 8.8em;
    clip-path: polygon(0% 0%, 100% 0%, 59% 100%, 0% 100%);
  }
  .city {
    font-size: 0.9em;
    background-color: #13181f;
    position: absolute;
    text-transform: uppercase;
    top: 0.4em;
    left: 7.6em;
    color: white;
    z-index: 0;
    padding: 0.2em 1.8em;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
  .countryContainer {
    position: absolute;
    top: 2em;
    left: 7.9em;
    display: flex;
    justify-content: end;
    width: fit-content;
    height: 1.4em;
    z-index: 1;
    transform: scaleX(1.8);

    .country {
      display: flex;
      width: 4.2em;
      aspect-ratio: 16/9;
      transform: skewX(-29deg);
    }
  }
  .laps {
    font-size: 0.7em;
    background-color: #13181f;
    position: absolute;
    text-transform: uppercase;
    top: 3.1em;
    left: 14.8em;
    color: white;
    z-index: 0;
    padding: 0.2em 1.8em;
    clip-path: polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%);
  }
  .iconBack {
    position: absolute;
    top: 4.2em;
    left: -5.4em;
    width: 62em;
    height: auto;
    color: #ff0447;
    z-index: 0;
    transform: rotateY(180deg);
  }
  .year {
    font-size: 0.8em;
    background-color: #13181f;
    position: absolute;
    top: 5.2em;
    right: 0;
    color: white;
    z-index: 2;
    padding: 2.2em 0.2em;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    clip-path: polygon(0% 25%, 100% 0%, 100% 100%, 0% 75%);
  }
  .circuitImage {
    z-index: 2;
    width: 100%;
    position: absolute;
    left: 0em;
    top: 4.8em;
  }
  .name {
    position: absolute;
    background-color: #13181f;
    width: 16.4em;
    height: 2.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    color: white;
    text-transform: uppercase;
    padding: 0.2em 0.1em;
    left: 0;
    bottom: 6.8em;
    border: 0.1em solid white;
    border-top: 0;
    border-left: 0;
    p {
      font-size: 0.7em;
    }
  }
  .info {
    position: absolute;
    width: 100%;
    height: 8.4em;
    bottom: 0;
    left: 0;
    z-index: 3;
    background-color: #13181f;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 1em 1.6em;
    gap: 0.6em;
    .icon {
      position: absolute;
      bottom: 0;
      height: 100%;
      right: -4.2em;
      color: #1e2127;
      transform: rotateX(180deg);
      z-index: -1;
    }
    p {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.7em;
        text-transform: capitalize;
      }
    }
  }
}
</style>
