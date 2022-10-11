<template>
  <NavBar></NavBar>
  <main>
    <router-view />
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import NavBar from "./components/global/NavBar.vue";
import Footer from "./components/global/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar: NavBar,
    Footer: Footer,
  },
};
</script>

<style lang="scss">
@import "./components/css/reset.css";

body {
  font-size: 15px;
  margin: 0;
  font-family: Roboto;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  background-color: #f0f0f0;
}

main {
  min-height: 60vh;
}

.svg-inline {
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}

h2 {
  font-size: 23px;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.s-header {
  text-align: center !important;
  max-width: 100%;
  flex-direction: column;
}

@media (min-width: $breakpoint-sm) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: $breakpoint-md) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: $breakpoint-lg) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: $breakpoint-xl) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: $breakpoint-xxl) {
  .container {
    max-width: 1340px;
  }
}

@media (max-width: $breakpoint-md) {
  body {
    overflow-x: hidden;
    width: 100%;
    padding-top: 74px;
  }
}

@media (min-width: 769px) and (max-width: $breakpoint-lg) {
  body main {
    padding-top: 80px;
  }
}

@media (min-width: $breakpoint-lg) and (max-width: $breakpoint-xxl) {
  body main {
    padding-top: 160px;
  }
}

@media (min-width: $breakpoint-xxl) {
  body main {
    padding-top: 160px;
  }
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
