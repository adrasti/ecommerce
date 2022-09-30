<template>
  <div class="slider">
    <div class="slider-inner">
      <div class="slider-item">
        <picture>
          <img
            src="https://assets2.razerzone.com/images/pnx.assets/f41f26375374987ccb5d2f53435698a3/razer-leviathan-v2-x-compact-desktop.jpg"
            alt=""
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  margin-top: -37px;
  overflow: hidden;
  height: 43.81vw;
  width: 100%;
}

.slider-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 520px;
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 100%;
    height: auto;
  }
}

.slider-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.6s ease-in-out;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

@media (min-width: 992px) {
  .slider {
    height: 30vw;
  }
}

@media (max-width: 767px) {
  .slider {
    padding-top: 20px;
  }
}
</style>
