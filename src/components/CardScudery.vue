<template>
  <section
    class="card"
    v-if="props.scudery"
    :style="`--color-scudery: ${props.scudery.color}`"
  >
    <Logo :class="'iconBack'" />
    <img :src="props.scudery.picture" class="picture" />
    <div class="name">
      <h1>{{ props.scudery.name }}</h1>
      <p>{{ props.scudery }}</p>
    </div>
    <div class="site">
      <!-- <p>{{ props.scudery.city }}</p> -->
      <p>{{ props.scudery.country.name }}</p>
      <picture v-html="props.scudery.country.flag.widescreen"></picture>
    </div>
    <p class="chasis">{{ props.scudery.chasis }}</p>
    <p class="engine">
      {{ props.scudery.engine }}
    </p>
    <div class="logo">
      <picture v-html="props.scudery.scudery.icon"> </picture>
    </div>
    <div class="f1-logo">
      <Logo :class="'icon'" />
    </div>
    <Line class="line" />
    <div class="shadow"></div>
  </section>
</template>

<script setup lang="ts">
import { Scudery } from "../types";
import { Logo, Line } from "../assets/icons";

interface Props {
  scudery: Scudery | null;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.card {
  font-size: 1.5rem;
  height: 20em;
  aspect-ratio: 1/0.72;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
  position: relative;
  overflow: hidden;
  border-radius: 1em;

  .iconBack {
    position: absolute;
    width: 53em;
    height: auto;
    z-index: 2;
    top: 0em;
    left: -8.7em;
    transform: rotateY(180deg);
    color: var(--color-scudery);
  }
  // .iconBack {
  //   position: absolute;
  //   width: 44em;
  //   height: auto;
  //   z-index: 2;
  //   top: 0em;
  //   left: 0em;
  //   transform: rotateY(180deg);
  //   color: var(--color-scudery);
  // }

  .name {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    // margin: 0.8em;
    margin: 1.2em;
    color: white;
    text-transform: uppercase;
    h1 {
      font-size: 1em;
      font-weight: 500;
      width: 22em;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellips;
      text-align: end;
    }
    p {
      font-size: 1.2em;
      font-weight: 600;
    }
  }
  .site {
    position: absolute;
    // display: grid;
    right: 0;
    top: 8em;
    // top: 5.5em;
    z-index: 2;
    margin: 1.4em 1.2em;
    color: white;
    gap: 0.4em 1.2em;
    text-transform: uppercase;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr 1fr;
    font-size: 0.8em;
    text-align: end;
    display: flex;

    & > :nth-child(1) {
      // grid-area: 1/1/2/2;
      letter-spacing: 0.08em;
      line-height: 1.6em;
    }
    & > :nth-child(2) {
      // grid-area: 2/1/3/2;
      font-family: "f1B";
    }
    picture {
      // grid-area: 1/2/3/3;
      height: 1.6em;
      display: flex;
      margin: auto;
    }
  }
  .picture {
    position: absolute;
    width: 25em;
    height: auto;
    z-index: 3;
    margin: auto auto -2em auto;
  }

  .chasis {
    position: absolute;
    color: var(--color-scudery);
    background-color: white;
    width: fit-content;
    padding: 0.1em 1.6em;
    clip-path: polygon(1.1lh 0%, 100% 0%, calc(100% - 1.1lh) 100%, 0% 100%);
    align-self: flex-end;
    font-weight: 500;
    font-size: 1em;
    text-transform: uppercase;
    z-index: 2;
    right: 6.5em;
    bottom: 3.4em;
  }

  .engine {
    position: absolute;
    background-color: var(--color-scudery);
    color: white;
    width: fit-content;
    padding: 0.1em 1.6em;
    clip-path: polygon(1.1lh 0%, 100% 0%, calc(100% - 1.1lh) 100%, 0% 100%);
    align-self: flex-start;
    font-weight: 500;
    font-size: 1em;
    text-transform: uppercase;
    z-index: 2;
    right: 7.9em;
    bottom: 1.6em;
  }
  .f1-logo {
    padding-left: 2.4em;
    height: 4.3em;
    width: 10em;
    background-color: var(--color-scudery);
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 1em 0;
    clip-path: polygon(41% 0%, 100% 0%, 100% 100%, 0% 100%);
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      color: white;
      width: auto;
      height: 1.6em;
    }
  }
  .logo {
    // padding: 0.6em 3.8em 0.7em 1.4em;
    background-color: var(--color-scudery);
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 1em 0;
    height: 4.3em;
    width: 9.7em;
    clip-path: polygon(0% 0%, 100% 0%, 56% 100%, 0% 100%);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2.4em;
    picture {
      display: flex;
      width: auto;
      height: 4em;
      color: white;
    }
  }
  .line {
    display: flex;
    height: 89%;
    position: absolute;
    z-index: 0;
    color: var(--color-scudery);
    bottom: 0.8em;
    left: 0;
  }
  .shadow {
    position: absolute;
    top: 12em;
    width: 100%;
    height: 17em;
    z-index: 1;
    background: linear-gradient(0deg, var(--color-scudery) 0%, transparent 100%);
  }
  &::after {
    content: "";
    background-color: white;
    height: 4.5em;
    display: flex;
    width: 9.9em;
    position: absolute;
    z-index: 1;
    clip-path: polygon(0% 0%, 100% 0%, 56% 100%, 0% 100%);
    bottom: 0.8em;
    left: 0;
  }
  &::before {
    content: "";
    background-color: white;
    height: 4.5em;
    width: 10.4em;
    display: flex;
    position: absolute;
    z-index: 3;
    clip-path: polygon(41% 0%, 100% 0%, 100% 100%, 0% 100%);
    bottom: 0.8em;
    right: 0;
  }
}
</style>
