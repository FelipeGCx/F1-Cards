<template>
  <main>
    <header>
      <h1 id="⚓-top">Pokemon Cards <sup>V2</sup></h1>
      <p class="author">
        By 
        <a href="https://twitter.com/simeydotme">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Twitter</title>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg> @simeydotme
        </a> |
        <em>
          <a href="https://github.com/simeydotme/pokemon-cards-css">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg> Simon Goellner
          </a>
        </em>
      </p>

      <section class="intro" id="⚓-intro">
        <p>
          A collection of <mark>advanced CSS</mark> styles to create
          <mark>realistic-looking effects</mark> for the faces of Pokemon cards.
        </p>
      </section>

      <div class="showcase">
        <Card v-if="!showcase" :isLoading="isLoading" />
        <Card v-else :card="showcase" />
      </div>

      <section class="info">
        <h2>Click on a Card to take a Closer look!</h2>
        <hr />
        <p class="small">
          I'm using Vue 3 with Composition API. <strong>Assigning values to css custom properties</strong> that drive the effects.
        </p>
      </section>
    </header>

    <Search v-model="query" />

    <CardList :isLoading="isLoading" :cards="basics" />
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Search from '@/components/test/search.vue';
import CardList from '@/components/test/cards.vue';
import Card from '@/components/test/card.vue';

const showcase = ref(null);
const basics = ref([]);
const reverse = ref([]);
const holos = ref([]);
const cosmos = ref([]);
const amazings = ref([]);
const radiant = ref([]);
const basicGallery = ref([]);
const vee = ref([]);
const veeUltra = ref([]);
const veeAlt = ref([]);
const veeMax = ref([]);
const veeMaxAlt = ref([]);
const veeStar = ref([]);
const trainerHolo = ref([]);
const rainbow = ref([]);
const gold = ref([]);
const veeGallery = ref([]);
const shinyVault = ref([]);

const query = ref('');
const isLoading = ref(true);

const getCards = async () => {
  const cardFetch = await fetch('/data/cards.json');
  const cards = await cardFetch.json();
  return cards;
};

const loadCards = async () => {
  const cards = await getCards();
  showcase.value = cards[0];
  basics.value = cards.slice(1, 4);
  reverse.value = [...cards.slice(4, 7), ...cards.slice(70, 76)];
  holos.value = cards.slice(7, 13);
  cosmos.value = cards.slice(13, 16);
  amazings.value = cards.slice(76, 85);
  radiant.value = cards.slice(16, 19);
  basicGallery.value = cards.slice(19, 22);
  vee.value = cards.slice(22, 25);
  veeUltra.value = cards.slice(25, 28);
  veeAlt.value = cards.slice(28, 34);
  veeMax.value = cards.slice(37, 40);
  veeMaxAlt.value = cards.slice(40, 43);
  veeStar.value = cards.slice(43, 46);
  trainerHolo.value = cards.slice(46, 52);
  rainbow.value = cards.slice(52, 58);
  gold.value = cards.slice(58, 64);
  veeGallery.value = cards.slice(64, 70);
  shinyVault.value = cards.slice(85, 91);
  isLoading.value = false;
};

onMounted(() => {
  loadCards();
  const $headings = document.querySelectorAll('h1,h2,h3');
  const $anchor = [...$headings].find(el => {
    const id = el.getAttribute('id')?.replace(/^.*?-/g, '');
    const hash = window.location.hash?.replace(/^.*?-/g, '');
    return id === hash;
  });
  if ($anchor) {
    setTimeout(() => {
      $anchor.scrollIntoView();
    }, 100);
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
