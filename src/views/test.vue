<template>
  <div
    :class="cardClass"
    :style="dynamicStyles"
    @touchmove="interact"
    @mousemove="interact"
    @mouseleave="interactEnd"
    @click="activate"
  >
    <img v-if="!loading" :src="frontImg" :alt="name" @load="imageLoader" />
    <div v-if="loading" class="loading">Loading...</div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useOrientation } from "@/lib/stores/orientation";
import { clamp, round, adjust } from "@/lib/helpers/Math";
import { useSpring } from "@vueuse/motion"; 

// Define the props
export default {
  props: {
    id: String,
    name: String,
    number: String,
    set: String,
    types: String,
    subtypes: {
      type: String,
      default: "basic",
    },
    supertype: {
      type: String,
      default: "pokémon",
    },
    rarity: {
      type: String,
      default: "common",
    },
    img: String,
    back: {
      type: String,
      default: "https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg",
    },
    foil: String,
    mask: String,
    showcase: Boolean,
  },

  setup(props) {
    const { orientation, resetOrientation } = useOrientation();

    const randomSeed = { x: Math.random(), y: Math.random() };
    const cosmosPosition = {
      x: Math.floor(randomSeed.x * 734),
      y: Math.floor(randomSeed.y * 1280),
    };
    const activeCard = ref<undefined | string>(undefined);

    const frontImg = ref("");
    const backImg = ref(props.back);
    const loading = ref(true);
    const interacting = ref(false);
    const active = ref(false);
    const firstPop = ref(true);
    const isVisible = ref(document.visibilityState === "visible");

    const springInteractSettings = { stiffness: 0.066, damping: 0.25 };
    const springPopoverSettings = { stiffness: 0.033, damping: 0.45 };

    // Springs equivalentes en Vue usando `@vueuse/motion`
    const springRotate = useSpring({ x: 0, y: 0 }, springInteractSettings);
    const springGlare = useSpring({ x: 50, y: 50, o: 0 }, springInteractSettings);
    const springBackground = useSpring({ x: 50, y: 50 }, springInteractSettings);
    const springRotateDelta = useSpring({ x: 0, y: 0 }, springPopoverSettings);
    const springTranslate = useSpring({ x: 0, y: 0 }, springPopoverSettings);
    const springScale = useSpring(1, springPopoverSettings);

    const dynamicStyles = computed(() => {
      return `  
        --pointer-x: ${springGlare.x}%;
        --pointer-y: ${springGlare.y}%;
        --pointer-from-center: ${clamp(
          Math.sqrt((springGlare.y - 50) ** 2 + (springGlare.x - 50) ** 2) / 50,
          0,
          1
        )};
        --pointer-from-top: ${springGlare.y / 100};
        --pointer-from-left: ${springGlare.x / 100};
        --card-opacity: ${springGlare.o};
        --rotate-x: ${springRotate.x + springRotateDelta.x}deg;
        --rotate-y: ${springRotate.y + springRotateDelta.y}deg;
        --background-x: ${springBackground.x}%;
        --background-y: ${springBackground.y}%;
        --card-scale: ${springScale};
        --translate-x: ${springTranslate.x}px;
        --translate-y: ${springTranslate.y}px;
      `;
    });

    const interact = (e: MouseEvent | TouchEvent) => {
      if (!isVisible.value) return;
      if (activeCard && activeCard.value !== props.id) return;

      interacting.value = true;

      const $el = e.target as HTMLElement;
      const rect = $el.getBoundingClientRect();
      const absolute = {
        x:
          e instanceof TouchEvent
            ? e.touches[0].clientX
            : (e as MouseEvent).clientX - rect.left,
        y:
          e instanceof TouchEvent
            ? e.touches[0].clientY
            : (e as MouseEvent).clientY - rect.top,
      };
      const percent = {
        x: clamp(round((100 / rect.width) * absolute.x)),
        y: clamp(round((100 / rect.height) * absolute.y)),
      };
      const center = {
        x: percent.x - 50,
        y: percent.y - 50,
      };

      updateSprings(
        {
          x: adjust(percent.x, 0, 100, 37, 63),
          y: adjust(percent.y, 0, 100, 33, 67),
        },
        { x: round(-(center.x / 3.5)), y: round(center.y / 2) },
        { x: round(percent.x), y: round(percent.y), o: 1 }
      );
    };

    const updateSprings = (background: any, rotate: any, glare: any) => {
      springBackground.stiffness = springInteractSettings.stiffness;
      springBackground.damping = springInteractSettings.damping;
      springRotate.stiffness = springInteractSettings.stiffness;
      springRotate.damping = springInteractSettings.damping;
      springGlare.stiffness = springInteractSettings.stiffness;
      springGlare.damping = springInteractSettings.damping;

      springBackground.set(background);
      springRotate.set(rotate);
      springGlare.set(glare);
    };

    const activate = () => {
      if (activeCard.value === props.id) {
        activeCard.value = undefined;
      } else {
        activeCard.value = props.id;
        resetOrientation();
      }
    };

    const interactEnd = () => {
      interacting.value = false;
      springRotate.set({ x: 0, y: 0 });
      springGlare.set({ x: 50, y: 50, o: 0 });
      springBackground.set({ x: 50, y: 50 });
    };

    const imageLoader = () => {
      loading.value = false;
    };

    onMounted(() => {
      frontImg.value = props.img.startsWith("http")
        ? props.img
        : "https://images.pokemontcg.io/" + props.img;
    });

    return {
      active,
      interact,
      interactEnd,
      activate,
      dynamicStyles,
      imageLoader,
      frontImg,
    };
  },
};
</script>

<style scoped>
.card {
  position: relative;
  transition: transform 0.3s ease;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
