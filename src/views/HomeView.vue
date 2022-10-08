<template>
  <HomeSlider></HomeSlider>
  <Carousel :lp="latestProductsLink"></Carousel>
  <Featured></Featured>
  <ImgBlocks></ImgBlocks>
</template>

<script lang="ts">
import Carousel from "../components/Carousel.vue";
import HomeSlider from "../components/homecomponents/HomeSlider.vue";
import FeaturedCategories from "../components/homecomponents/FeaturedCategories.vue";
import ImageBlocks from "../components/homecomponents/ImageBlocks.vue";
import { defineComponent, onMounted, inject } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Carousel: Carousel,
    HomeSlider: HomeSlider,
    Featured: FeaturedCategories,
    ImgBlocks: ImageBlocks
  },
  setup() {
    const root = inject('root');
    const latestProductsLink = `${root}/latest-products/`;
    onMounted(() => {
      document.title = "Home";
    });
    return {latestProductsLink}
  },
});
</script>
