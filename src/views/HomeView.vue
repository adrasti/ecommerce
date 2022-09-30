<template>
  <HomeSlider></HomeSlider>
  <Carousel></Carousel>
</template>

<script lang="ts">
import Carousel from "../components/Carousel.vue";
import HomeSlider from "../components/HomeSlider.vue";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Carousel: Carousel,
    HomeSlider: HomeSlider,
  },
  setup() {
    onMounted(() => {
      document.title = "Home";
    });
  },
});
</script>
