<template>
  <header class="site-header">
    <div class="container">
      <div class="header-logo">
        <router-link to="/home" class="navbar-item">
          <div
            class="hamburger-menu"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
            @click="handleHamburger"
          >
            <svg
              class="mobile-hamburger svg-inline"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"
              ></path>
            </svg>
          </div>
          <picture>
            <img src="~@/assets/site-logo-white.svg" alt="" />
          </picture>
        </router-link>
      </div>
      <div class="header-search-bar"></div>
      <div class="header-access">
        <router-link to="/cart" class="header-access-item access-cart">
          <div class="access-icon">
            <span class="cart-count" v-show="showCartCount">{{
              cartTotalLength
            }}</span>
            <svg
              class="svg-inline"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="cart-shopping"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"
              ></path>
            </svg>
          </div>
          <div class="access-link">
            <a href="">Корзина</a>
          </div>
        </router-link>
        <router-link to="/login" class="header-access-item access-login">
          <div class="access-icon">
            <svg
              class="svg-inline"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z"
              ></path>
            </svg>
          </div>
          <div class="access-link">
            <a href="">Войти</a>
          </div>
        </router-link>
      </div>
    </div>
    <div class="mobile-menu" :class="{ 'menu-is-open': showMobileMenu }"></div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import { ref } from "vue";
import type { cartItemArr } from "../store/index";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavBar",
  setup() {
    const store = useStore();
    const showMobileMenu = ref<boolean>(false);
    const showCartCount = ref<boolean>(false);
    const cart = ref({
      items: <cartItemArr>[],
    });
    function handleHamburger() {
      showMobileMenu.value = !showMobileMenu.value;
    }

    const cartTotalLength = computed(() => {
      let totalLength = 0;
      for (let i = 0; i < cart.value.items.length; i++) {
        totalLength += cart.value.items[i].quantity;
      }
      if (totalLength > 0) showCartCount.value = true;
      else showCartCount.value = false;
      return totalLength;
    });

    onBeforeMount(() => {
      store.commit("initializeStore");
    });

    onMounted(() => {
      cart.value = store.state.cart;
    });

    return { showMobileMenu, handleHamburger, cartTotalLength, showCartCount };
  },
});
</script>

<style scoped lang="scss">
.site-header,
.header-logo,
.header-access,
.header-search-bar {
  float: left;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.site-header {
  width: 100%;
  z-index: 100;
  background: linear-gradient(
    90deg,
    #353535 0,
    #515151 20%,
    #515151 46%,
    #353535
  );
}

.cart-count {
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  font-family: Tahoma, Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  text-align: center;
  top: 0;
  right: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  background-color: #f46036;
  color: #fff;
}

.header-search-bar {
  width: 62%;
  margin-right: 2%;
  margin-top: 7%;
}

.mobile-menu {
  overflow: hidden;
  position: absolute;
  background-color: orange;
}

.access-cart {
  a {
    margin-left: 7px;
  }
}

.header-access {
  width: 20%;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  .header-access-item {
    display: block;
    text-align: center;
    position: relative;
    float: left;
    width: 50%;
    padding-left: 0;
    padding-right: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      bottom: -20px;
      height: 20px;
    }
  }
}

.access-link {
  a {
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 599;
  }
}

.access-icon {
  font-size: 34px;
  width: 34px;
  display: block;
  margin: 0 auto;
  position: relative;
  color: #fff;
}

.header-logo {
  width: 22%;
  margin-right: 2%;
  position: relative;
  img {
    max-width: 100%;
    max-height: 60px;
  }
}

.mobile-hamburger {
  color: red;
  font-size: 35px;
  line-height: 10px;
}

.login {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: 0.1px;
  font-weight: 500;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: $breakpoint-lg) {
  .header-access {
    margin-top: 20px;
  }
  .header-search-bar {
    margin-top: 34px;
    margin-right: 4%;
    width: 52%;
  }
  .site-header {
    padding-bottom: 30px;
  }
  .hamburger-menu {
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    opacity: 0;
    position: absolute;
    width: 31px;
    top: 5px;
    left: 0;
  }
}

@media (min-width: $breakpoint-xl) {
  .header-logo {
    margin-top: 22px;
  }
}

@media (min-width: $breakpoint-xxl) {
  .site-header {
    z-index: 1030;
    position: fixed;
    top: 0;
  }
}

@media (min-width: $breakpoint-lg) and (max-width: $breakpoint-xxl) {
  .site-header {
    display: inline-block;
    position: relative;
  }
}

@media (min-width: $breakpoint-lg) and (max-width: $breakpoint-xl) {
  .header-logo {
    margin-right: 2%;
    margin-top: 32px;
  }
}

@media (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  .header-logo {
    margin-top: 4px;
    margin-left: 6%;
  }
  .header-search-bar {
    width: 48%;
  }
  .hamburger-menu {
    margin-top: 5px;
  }
}

@media (min-width: 480px) and (max-width: $breakpoint-md) {
  .header-logo {
    width: 32%;
    margin-left: 10%;
  }
}

@media (min-width: 480px) and (max-width: $breakpoint-lg) {
  .hamburger-menu {
    left: -45px;
  }
}

@media (max-width: $breakpoint-md) {
  .header-access {
    width: 38%;
    float: right;
    padding-right: 15px;
    .svg-inline {
      vertical-align: -0.3em;
    }
  }
  .header-search-bar {
    margin: 0;
    position: fixed;
    left: -100%;
    top: 66px;
    width: 95%;
    z-index: 1029;
    border: 1px solid #353535;
  }
  .access-icon {
    font-size: 23px;
  }
  .mobile-hamburger {
    font-size: 30px;
    margin-top: 5px;
  }
}

@media (max-width: 480px) {
  .header-logo {
    position: relative;
    width: 40%;
    text-align: left;
    padding-left: 55px;
    margin: 0;
  }
}

@media (max-width: $breakpoint-lg) {
  .site-header {
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1030;
    position: fixed;
  }
  .access-link {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
  }
  .hamburger-menu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .mobile-menu {
    -webkit-transition: left 0.5s ease;
    transition: left 0.5s ease;
    left: -100%;
    width: 85%;
    min-height: 90vh;
  }
  .menu-is-open {
    left: 0;
    overflow-y: scroll;
  }
  .mobile-menu {
    top: 60px;
  }
}
</style>
