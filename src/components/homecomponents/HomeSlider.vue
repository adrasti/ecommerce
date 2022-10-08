<template>
  <div class="slider">
    <div class="slider-inner">
      <div class="slider-item" :class="slide1Classes" style="background:black">
        <picture>
          <img src="../../assets/slider1.jpg" alt="" />
        </picture>
      </div>
      <div class="slider-item" :class="slide2Classes"  style="background:#c3a58db8">
        <picture>
          <img src="../../assets/slider2.jpg" alt="" />
        </picture>
      </div>
      <div class="slider-item" :class="slide3Classes" style="background:black">
        <picture>
          <img src="../../assets/slider3.jpg" alt="" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";


export default defineComponent({
  setup() {
    const curSlide = ref<number>(0);

    const isLeft = ref<boolean>(true);

    const isChanging = ref<boolean>(false);

    
    const next = ref<number>(1);

    const delayedLeft = ref<number>(-1);


    onMounted(() => {
      setInterval(() => {
        isChanging.value = true;
        delayedLeft.value = next.value;
        setTimeout(() => {
          delayedLeft.value = -1;
        }, 5);
        setTimeout(() => {
          isChanging.value = false;
          next.value = (next.value + 1) % 3
          curSlide.value = ((curSlide.value + 1) % 3)
        }, 600);
      }, 6000);
    });

    const slide1Classes = computed(()=>{
      return {
        "activeSlide": curSlide.value == 0,
        "slider-item-left": isChanging.value &&  isLeft.value && (curSlide.value == 0 || next.value == 0) && delayedLeft.value!==0,
        "slider-item-next": isChanging.value &&  isLeft.value && (next.value == 0),
      }
    })

     const slide2Classes = computed(()=>{
      return {
        "activeSlide": curSlide.value == 1,
        "slider-item-left": isChanging.value &&  isLeft.value && (curSlide.value == 1 || next.value == 1) && delayedLeft.value!==1,
        "slider-item-next": isChanging.value &&  isLeft.value && (next.value == 1),

      }
    })

     const slide3Classes = computed(()=>{
      return {
        "activeSlide": curSlide.value == 2,
        "slider-item-left": isChanging.value &&  isLeft.value && (curSlide.value == 2 || next.value == 2) && delayedLeft.value!==2,
        "slider-item-next": isChanging.value &&  isLeft.value && (next.value == 2),

      }
    })

    

    return { curSlide, slide1Classes, slide2Classes, slide3Classes };
  },
});
</script>

<style lang="scss">
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
  background:black;
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
  display: block;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.6s ease-in-out;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  display: none;
}

.activeSlide{
  z-index: 1000;
}

.slider-item.activeSlide, .slider-item-prev, .slider-item-next {
  display: block;
}

.activeSlide.slider-item-right, .slider-item-next:not(.slider-item-left){
    -webkit-transform:translateX(100%);
    transform:translateX(100%)
}



.activeSlide.slider-item-left,.slider-item-prev:not(.slider-item-right){
    -webkit-transform:translateX(-100%);
    transform:translateX(-100%)
}

.slider-fade .slider-item-next.slider-item-left,.slider-fade .slider-item-prev.slider-item-right,.slider-fade .slider-item.activeSlide{
    z-index:1;
    opacity:1
}
.slider-fade .activeSlide.slider-item-left,.slider-fade .activeSlide.slider-item-right{
    z-index:0;
    opacity:0;
    -webkit-transition:opacity 0s .6s;
    transition:opacity 0s .6s
}

@media (min-width: 992px) {
  .slider {
    height: 540px;
  }
}

@media (max-width: 767px) {
  .slider {
    padding-top: 20px;
  }
}
</style>
