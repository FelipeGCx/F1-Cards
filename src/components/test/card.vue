<template>
  <div
    class="card"
    :class="{ active, interacting, loading }"
    ref="card"
    :style="styles"
    :data-number="number"
    :data-subtypes="subtypes"
    :data-supertype="supertype"
    :data-rarity="rarity"
    :data-gallery="gallery"
  >
    <div class="card__translater">
      <button
        class="card__rotator"
        ref="rotator"
        @pointermove="interact"
        @mouseout="interactEnd"
        aria-label="Expand the Pokemon Card; {name}."
      >
        <img
          class="card__back"
          :src="back_img"
          alt="The back of a Pokemon Card, a Pokeball in the center with Pokemon logo above and below"
        />
        <div class="card__front">
          <img
            :src="front_img"
            v-on:load="imageLoader"
            :alt="`Front design of the ${name} Pokemon Card, with the stats and info around the edge`"
          />
          <card-shine :subtypes="subtypes" :supertype="supertype" />
          <card-glare :subtypes="subtypes" :rarity="rarity" />
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useSpring } from "@vueuse/motion";
import { clamp, round } from "@/helpers/Math";
import CardShine from "@/components/test/card-shine.vue";
import CardGlare from "@/components/test/card-glare.vue";

const galaxyPosition = Math.floor(Math.random() * 1500);
const back_img =
  "https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg";

export default defineComponent({
  name: "Card",
  components: { CardShine, CardGlare },
  props: {
    img: String,
    name: String,
    number: Number,
    supertype: String,
    subtypes: Array,
    rarity: String,
    gallery: Boolean,
    active: Boolean,
  },
  setup(props) {
    const springR = { stiffness: 666, damping: 25 };
    const springD = { stiffness: 333, damping: 45 };

    const springRotate = useSpring({ x: 0, y: 0 }, springR);
    const springGlare = useSpring({ x: 50, y: 50, o: 0 }, springR);
    const springBackground = useSpring({ x: 50, y: 50 }, springR);

    const springRotateDelta = useSpring({ x: 0, y: 0 }, springD);
    const springTranslate = useSpring({ x: 0, y: 0 }, springD);
    const springScale = useSpring({ s: 1 }, springD);

    const interacting = ref(false);
    const loading = ref(true);
    const back_img_ref = ref(back_img);
    const front_img = ref("");

    const styles = computed(() => {
      return `
        --mx: ${springGlare.values['x']}%;
        --my: ${springGlare.value.y}%;
        --tx: ${springTranslate.value.x}px;
        --ty: ${springTranslate.value.y}px;
        --s: ${springScale.value.s};
        --o: ${springGlare.value.o};
        --rx: ${springRotate.value.x + springRotateDelta.value.x}deg;
        --ry: ${springRotate.value.y + springRotateDelta.value.y}deg;
        --pos: ${springBackground.value.x}% ${springBackground.value.y}%;
        --posx: ${springBackground.value.x}%;
        --posy: ${springBackground.value.y}%;
        --hyp: ${clamp(
          Math.sqrt(
            (springGlare.value.y - 50) ** 2 +
              (springGlare.value.x - 50) ** 2
          ) / 50,
          0,
          1
        )};
        --galaxybg: center ${galaxyPosition}px;
      `;
    });

    const imageLoader = () => {
      loading.value = false;
    };

    const interact = (e: MouseEvent | TouchEvent) => {
      if (props.active) {
        interacting.value = true;
      }

      if (e instanceof TouchEvent) {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
      }

      const target = e.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const absolute = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      const percent = {
        x: round((100 / rect.width) * absolute.x),
        y: round((100 / rect.height) * absolute.y),
      };
      const center = {
        x: percent.x - 50,
        y: percent.y - 50,
      };

      springBackground.set({
        x: round(50 + percent.x / 4 - 12.5),
        y: round(50 + percent.y / 3 - 16.67),
      });
      springRotate.set({
        x: round(-(center.x / 3.5)),
        y: round(center.y / 2),
      });
      springGlare.set({
        x: percent.x,
        y: percent.y,
        o: 1,
      });
    };

    const interactEnd = (e: MouseEvent | TouchEvent | null, delay = 100) => {
      setTimeout(() => {
        const snapStiff = 0.01;
        const snapDamp = 0.06;
        interacting.value = false;

        springRotate.set({ x: 0, y: 0 });
        springGlare.set({ x: 50, y: 50, o: 0 });
        springBackground.set({ x: 50, y: 50 });
      }, delay);
    };

    const _popover = () => {
      const rect = document.querySelector(".card")?.getBoundingClientRect();
      const scaleW = (window.innerWidth / rect!.width) * 0.9;
      const scaleH = (window.innerHeight / rect!.height) * 0.9;
      const scaleF = 1.75;
      springScale.set({ s: Math.min(scaleW, scaleH, scaleF) });
      interactEnd(null, 100);
    };

    const _retreat = () => {
      springScale.set({ s: 1 });
      springTranslate.set({ x: 0, y: 0 });
      springRotateDelta.set({ x: 0, y: 0 });
      interactEnd(null, 100);
    };

    watch(() => props.active, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        if (newVal) {
          _popover();
        } else {
          _retreat();
        }
      }
    });

    return {
      back_img_ref,
      front_img,
      interacting,
      loading,
      styles,
      imageLoader,
      interact,
      interactEnd,
    };
  },
});
</script>

<style lang="scss" scoped>
:root {
  --mx: 50%;
  --my: 50%;
  --s: 1;
  --o: 0;
  --tx: 0px;
  --ty: 0px;
  --rx: 0deg;
  --ry: 0deg;
  --pos: 50% 50%;
  --posx: 50%;
  --posy: 50%;
  --hyp: 0;
}

.card {
  --radius: 4.55% / 3.5%;
  --back: #004177;
  --glow: #69d1e9;
  z-index: calc(var(--s) * 100);
  transform: translate3d(0, 0, 0.1px);
  will-change: transform, visibility;
  transform-style: preserve-3d;
  width: 300px;

  &.interacting {
    z-index: calc(var(--s) * 120);
  }

  &.active {
    .card__translater,
    .card__rotator {
      touch-action: none;
    }

    .card__rotator {
      box-shadow: 0 0 10px 0px var(--glow), 0 0 10px 0px var(--glow),
        inset 0 0 8px 2px var(--back);
    }

    .card__back,
    .card__front {
      transform: rotateY(180deg);
      transform-origin: center center;
    }

    .card__back {
      box-shadow: 0 0 20px 3px var(--back), inset 0 0 15px 3px var(--back);
    }

    .card__front {
      box-shadow: 0 0 10px 3px var(--glow), inset 0 0 10px 2px var(--back);
    }
  }

  .card__translater {
    transition: all 0.25s ease;
    height: 100%;
  }

  .card__rotator {
    display: block;
    margin: 0;
    border-radius: var(--radius);
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    overflow: hidden;
    background-color: var(--back);
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .card__back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    z-index: 1;
    transition: all 0.2s ease;
  }

  .card__front {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: rotateY(0deg);
    backface-visibility: hidden;
    z-index: 2;
    transition: all 0.2s ease;
  }
}
</style>
