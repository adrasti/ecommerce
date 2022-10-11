<template>
  <button
    @click="logout"
    style="
      display: block;
      margin-left: auto;
      margin-right: auto;
      background-color: red;
      padding: 20px;
      font-size: 16px;
    "
  >
    Выйти
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const logout = () => {
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userid");
      store.commit("removeToken");
      router.push("/");
    };
    return { logout };
  },
});
</script>
