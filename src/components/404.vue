<template>
  <div class="container notfound">
    <h1>Ошибка 404</h1>

    <p>Страница не найдена</p>

    <div>¯\_(ツ)_/¯</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
  setup() {},
});
</script>

<style lang="scss">
.notfound {
  height: 60vh;
  text-align: center;
  h1 {
    font-size: 25px;
    margin-bottom: 20px;
  }
  div {
    font-size: 100px;
    margin-top: 50px;
  }
}


@media (max-width: 500px){
  .notfound{
    div{
      font-size:60px;
    }
  }
}
</style>
