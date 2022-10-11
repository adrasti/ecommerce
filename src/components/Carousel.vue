<template>
  <div class="carousel">
    <div class="container">
      <div class="row s-header">
        <h2>Новые продукты</h2>
      </div>
      <div class="carousel-content row">
        <div class="carousel-body-outer">
          <div class="carousel-body" :style="carouselBodyStyle">
            <div
              v-bind:style="{ width: carouselItemWidth + 'px' }"
              class="carousel-item"
              v-for="product in latestProducts"
              :key="product.id"
            >
              <ProductBox :prdct="product"></ProductBox>
            </div>
          </div>
        </div>
        <div class="carousel-navigation">
          <button class="carousel-prev">
            <span
              v-show="currentSlide"
              class="arrow-button arrow-prev"
              @click="switchSlide(false)"
            ></span>
          </button>
          <button class="carousel-next">
            <span
              v-show="showNextButton"
              class="arrow-button arrow-next"
              @click="switchSlide(true)"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosError } from "axios";
import { computed, onBeforeMount, defineComponent } from "vue";
import { ref } from "vue";
import ProductBox from "../components/ProductBox.vue";

export default defineComponent({
  name: "Carousel",
  components: {
    ProductBox: ProductBox,
  },
  props: ["lp"],
  setup(props) {
    const itemNum = ref<number>(15);
    const itemsPerSlide = ref<number>(5);
    const currentSlide = ref<number>(0);
    const carouselBodyWidth = ref<number>(3975);
    const carouselItemWidth = ref<number>(250);
    const carouselItemPadding = ref<number>(0);
    let latestProducts = ref([]);

    const carouselBodyStyle = computed(() => {
      return `transform: translate3d(-${
        (carouselItemWidth.value + 15) *
        itemsPerSlide.value *
        currentSlide.value
      }px, 0px, 0px); width:${
        carouselBodyWidth.value
      }px; transition: all 0.75s; padding-left: ${
        carouselItemPadding.value
      }px; padding-right: ${carouselItemPadding.value}px`;
    });

    function getw() {
      const b: number =
        window.innerWidth && document.documentElement.clientWidth
          ? Math.min(window.innerWidth, document.documentElement.clientWidth)
          : window.innerWidth ||
            document.documentElement.clientWidth ||
            document.getElementsByTagName("body")[0].clientWidth;
      return b;
    }

    async function getLatestProducts() {
      await axios
        .get(props.lp)
        .then((response) => {
          latestProducts.value = response.data;
          itemNum.value = Object.keys(latestProducts.value).length;
        })
        .catch((e: Error | AxiosError) => {
          console.log(e);
        });
    }

    const showNextButton = computed(() => {
      if (
        currentSlide.value ==
        Math.ceil(itemNum.value / itemsPerSlide.value) - 1
      ) {
        return false;
      }
      return true;
    });

    function switchSlide(next: boolean) {
      if (next) {
        if (
          currentSlide.value <
          Math.ceil(itemNum.value / itemsPerSlide.value) - 1
        ) {
          currentSlide.value++;
        }
      } else if (currentSlide.value > 0) currentSlide.value--;
    }

    function adjustResize() {
      const a: number = getw();
      if (a < 550) {
        carouselItemWidth.value = a * 0.7;
        carouselItemPadding.value = 40;
        itemsPerSlide.value = 1;
        carouselBodyWidth.value =
          (carouselItemWidth.value + 15) * itemNum.value + 80;
        currentSlide.value = 0;
        return;
      } else if (a < 768) {
        carouselItemWidth.value = 430;
        carouselItemPadding.value = 40;
        itemsPerSlide.value = 1;
        carouselBodyWidth.value =
          (carouselItemWidth.value + 15) * itemNum.value + 80;
        currentSlide.value = 0;
        return;
      } else if (a < 991) {
        itemsPerSlide.value = 3;
        carouselItemWidth.value = 220;
        carouselItemPadding.value = 0;
        carouselBodyWidth.value =
          (carouselItemWidth.value + 15) * itemNum.value;
        currentSlide.value = 0;
        return;
      } else if (a < 1200) {
        itemsPerSlide.value = 3;
        carouselItemWidth.value = 300;
        carouselItemPadding.value = 0;
        carouselBodyWidth.value =
          (carouselItemWidth.value + 15) * itemNum.value;
        currentSlide.value = 0;
        return;
      } else if (a < 1400) {
        carouselItemWidth.value = 210;
      } else carouselItemWidth.value = 250;
      itemsPerSlide.value = 5;
      carouselItemPadding.value = 0;
      carouselBodyWidth.value = (carouselItemWidth.value + 15) * itemNum.value;
      currentSlide.value = 0;
    }

    function resizeListen() {
      window.addEventListener("resize", adjustResize);
    }

    onBeforeMount(() => {
      getLatestProducts();
      resizeListen();
      adjustResize();
    });

    return {
      itemNum,
      carouselBodyWidth,
      carouselBodyStyle,
      carouselItemWidth,
      latestProducts,
      switchSlide,
      currentSlide,
      showNextButton,
    };
  },
});
</script>

<style lang="scss">
.carousel {
  position: relative;
  margin-bottom: 3rem;
  margin-top: 2rem;
}

.carousel-content {
  margin-bottom: 0.5rem;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
}

.s-header {
  h2 {
    margin-bottom: 30px;
  }
}

.carousel-body-outer {
  padding: 3px 8px 9px;
  margin-left: -6px;
  margin-right: -6px;
  overflow: hidden;
}

.carousel-item {
  background-color: #fff;
  -webkit-box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-transition: -webkit-box-shadow 0.15s linear;
  transition: -webkit-box-shadow 0.15s linear;
  transition: box-shadow 0.15s linear;
  transition: box-shadow 0.15s linear, -webkit-box-shadow 0.15s;
  margin-right: 15px;
  -webkit-transition: opacity 0.15s linear, -webkit-transform 0.15s linear;
  transition: opacity 0.15s linear, -webkit-transform 0.15s linear;
  transition: opacity 0.15s linear, transform 0.15s linear;
  transition: opacity 0.15s linear, transform 0.15s linear,
    -webkit-transform 0.15s linear;
}

.carousel-item:hover {
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgb(0 0 0 / 24%);
}

.carousel-next,
.carousel-prev {
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 2em;
  width: 30px;
  height: 40px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: none;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
}

.arrow-button.arrow-next::before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  right: 0;
  top: 10px;
}

.arrow-button.arrow-next::after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  right: 0;
  bottom: 10px;
}

.arrow-button.arrow-prev::before {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 0;
  top: 10px;
}

.arrow-button.arrow-prev::after {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 0;
  bottom: 10px;
}

.arrow-button {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}

.arrow-button::after,
.arrow-button::before {
  content: "";
  width: 25px;
  height: 4px;
  background-color: #353535;
  position: absolute;
  border-radius: 2px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.carousel-next {
  right: 5px;
}

.carousel-prev {
  left: 5px;
}

.item-thumbnail {
  margin: 0 auto;
  position: relative;
  max-width: 250px;
  padding: 15px;
}

.item-thumbnail img {
  width: 100%;
  margin: 0 auto;
  display: block;
}

.item-meta {
  padding: 0 5px 10px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.17, 0.67, 0.21, 1);
}

.item-price {
  margin-bottom: 0;
  float: left;
  padding: 0 0 0 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 185px;
  margin-top: 4px;
  span {
    font-size: 18px;
    white-space: nowrap;
    line-height: 44px;
  }
}

.item-name {
  line-height: 1.2;
  height: 2.4em;
  overflow: hidden;
  margin-bottom: 0;
  font-size: 1em;
  display: block;
}

.carousel-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.item-cart {
  margin: 5px 0;
  float: right;
  padding: 8px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  background-color: #73b43e;
  font-size: 22px;
  line-height: 22px;
  border-radius: 5px;
  font-weight: 500;
  border: none;
  white-space: nowrap;
  color: white;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #3e8a00;
    &:after {
      top: -6px;
      opacity: 1;
    }
  }
  &:after {
    content: "+";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 18px;
    top: -15px;
    font-size: 12px;
    opacity: 0;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
}

@media (min-width: 1200px) {
  .item-cart {
    margin: 7px 10px 0 0;
  }
}
</style>
