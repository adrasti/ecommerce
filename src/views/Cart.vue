<template>
  <div v-if="totalPrice" class="cart-content">
    <div class="container">
      <div>
        <div class="row">
          <div class="cart-list">
            <div class="cart-list-body">
              <div class="cart-table cart-table-head">
                <div class="cart-item cart-table-padding"></div>
                <div class="cart-item cart-table-pic"></div>
                <div class="cart-item cart-table-name">Название продукта</div>
                <div class="cart-item cart-table-quantity">Количество</div>
                <div class="cart-item cart-table-price">Цена</div>
                <div class="cart-item cart-table-remove">
                  <svg
                  @click="removeEverything"
                    class="svg-inline"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="trash-can"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M144 400C144 408.8 136.8 416 128 416C119.2 416 112 408.8 112 400V176C112 167.2 119.2 160 128 160C136.8 160 144 167.2 144 176V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V176C208 167.2 215.2 160 224 160C232.8 160 240 167.2 240 176V400zM336 400C336 408.8 328.8 416 320 416C311.2 416 304 408.8 304 400V176C304 167.2 311.2 160 320 160C328.8 160 336 167.2 336 176V400zM310.1 22.56L336.9 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V96H16C7.164 96 0 88.84 0 80C0 71.16 7.164 64 16 64H111.1L137 22.56C145.8 8.526 161.2 0 177.7 0H270.3C286.8 0 302.2 8.526 310.1 22.56V22.56zM148.9 64H299.1L283.8 39.52C280.9 34.84 275.8 32 270.3 32H177.7C172.2 32 167.1 34.84 164.2 39.52L148.9 64zM64 432C64 458.5 85.49 480 112 480H336C362.5 480 384 458.5 384 432V96H64V432z"
                    ></path>
                  </svg>
                </div>
              </div>
              <CartItem
                v-on:removeFromCart="removeFromCart"
                v-for="item in items"
                :key="item.product.id"
                :initialItem="item"
              />
            </div>
          </div>
          <div class="cart-checkout">
            <div class="orderbar sticky-top">
              <div class="orderbar-total">
                <p class="title">Общая стоимость</p>
                <p class="product-price">{{ totalPrice }}₽</p>
              </div>
              <div><button class="order">Заказать</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="emptycart">
    <h1>Корзина пуста </h1>
    <router-link to="/home"><button class="home-redirect">Домой</button></router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import CartItem from "../components/CartItem.vue";
import type { cartItemArr } from "../store/index";
import { useStore } from "vuex";
import { cartitem } from "../store/index";

export default defineComponent({
  name: "Cart",
  components: {
    CartItem: CartItem,
  },
  setup() {
    const store = useStore();
    const items = ref<cartItemArr>(store.state.cart.items);

    function removeFromCart(item: cartitem) {
      items.value = items.value.filter((i) => i.product.id !== item.product.id);
      store.commit("removeFromCart", item);
    }

    const totalPrice = computed(() => {
      let count = 0;
      for (let i = 0; i < items.value.length; i++) {
        count =
          count +
          items.value[i].quantity * Number(items.value[i].product.price);
      }
      return count;
    });

    function removeEverything() {
      items.value = [];
      store.commit("removeEverything");
    }

    return { items, removeFromCart, totalPrice, removeEverything };
  },
});
</script>

<style lang="scss">

.emptycart{
  min-height:60vh;
  text-align: center;
  h1{
    font-size: 32px;
    font-weight: 500;
    padding-top:5rem;
  }
  .home-redirect {
    margin-top:2rem;
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.home-redirect:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.home-redirect:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.home-redirect:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
}
.cart-content {
  position: relative;
  margin: 0 auto 30px;
  padding-top: 10px;
  min-height: 60vh;
  .container {
    padding: 0 15px;
  }
}

.cart-list {
  position: relative;
  width: 100%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.cart-checkout {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
}

.cart-table-padding {
  padding: 0;
  width: 10px;
}

.orderbar {
  background: white;
  overflow: hidden;
  .orderbar-total {
    display: none;
    position: relative;
    padding: 20px 15px;
    text-align: center;
    .product-price {
      margin-bottom: 15px;
      font-size: 24px;
    }
  }
  .order {
    display: block;
    width: 100%;
    padding: 25px 15px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 0;
    background: #73b43e;
    background-color: #73b43e;
    font-weight: 500;
    border: none;
    white-space: nowrap;
    cursor: pointer;
    color: white;
    &:hover {
      background-color: #609634;
      text-decoration: none;
    }
  }
  .title {
    margin-bottom: 20px;
    font-size: 16px;
  }
  p {
    font-size: 13px;
    line-height: normal;
  }
}

@supports (position: sticky) {
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sticky-top {
  top: 115px;
}

.cart-table {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  margin: 5px 0;
  padding: 0 35px 10px 100px;
  border-collapse: collapse;
  background: #fff;
  .cart-item {
    display: block;
    padding: 10px;
  }
  .cart-table-name {
    width: 100%;
  }
  .cart-table-quantity {
    width: 45%;
  }
  .cart-table-price {
    width: 55%;
    text-align: left;
  }
  .cart-table-remove {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    text-align: center;
    font-size: 23px;
    cursor: pointer;
    color: #353535;
    svg{
      &:hover{
        color:orange;
      }
    }
  }
}

.cart-table-head {
  .svg-inline {
    font-size: 23px;
  }
  .cart-table-quantity {
    text-align: center;
  }
}

.form-control {
  color: red;
  font-size: 12px;
}

.text-quantity {
  width: 100%;
  min-height: 40px;
  padding: 8px 5px 8px 21px;
  font-size: 15px;
  line-height: 24px;
  color: #919191;
  border: 1px solid #ddd;
  outline: none;
}

.cart-item.cart-table-pic {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 80px;
  padding: 0;
  min-height: 0;
  img {
    max-width: 100%;
    height: auto;
  }
}

.cart-table-title {
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #353535;
}

.dropdown {
  position: relative;
  background: #fff;
  .input {
    margin: 0;
    padding: 0;
    width: 100%;
    border: 1px solid #ddd;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    span {
      display: block;
      padding: 7px 40px 4px 10px;
      min-height: 40px;
      font-size: 15px;
      line-height: 24px;
      overflow: hidden;
      text-align: center;
      cursor: default;
      text-decoration: none;
      outline: none;
      color: #919191;
    }
  }
  .list {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    .drop {
      height: auto;
      display: block;
      width: 100%;
      position: absolute;
      border: 1px solid #d4d4d4;
      z-index: 100;
      .more {
        padding: 8px 0;
        background: white;
      }
    }
    ul {
      margin: 0;
      max-height: 180px;
      list-style: none;
      padding: 0;
      max-height: 180px;
      overflow: auto;
      text-align: left;
      border-bottom: 1px solid #e4e4e4;
    }
    li {
      width: 100%;
      height: 34px;
      background: white;
      span {
        color: black;
        padding: 7px 5px 0;
        &:hover {
          background-color: #efefef;
        }
      }
    }
    span {
      display: block;
      text-align: center;
      color: #d4d4d4;
      text-decoration: none;
      cursor: default;
    }
  }
  .svg-inline {
    position: absolute;
    right: 10px;
    top: 8px;
    bottom: 0;
    font-size: 16px;
  }
}

@media screen and (min-width: 375px) {
  .cart-table .cart-table-price {
    overflow: hidden;
    width: auto;
  }
}

@media screen and (min-width: 480px) {
  .cart-table .cart-table-name {
    width: 100%;
  }
  .cart-table .cart-table-quantity {
    width: 110px;
  }
}

@media screen and (min-width: 767px) {
  .cart-table {
    overflow: visible;
    display: table;
    padding: 0;
    background: none;
    .cart-item {
      display: table-cell;
      vertical-align: middle;
      min-height: 110px;
      background: white;
    }
    .cart-item.cart-table-pic {
      position: static;
      top: auto;
      left: auto;
      width: 100px;
      padding: 10px;
      vertical-align: top;
    }
    .cart-table-name {
      width: auto;
    }
    .cart-table-quantity {
      float: none;
    }
    .cart-table-price {
      clear: none;
      float: none;
      width:100px;
      text-align: center;
    }
    .cart-table-remove {
      float: none;
      position: static;
      top: auto;
      right: auto;
      transform: none;
      width: 60px;
    }
  }
  .cart-table-title {
    font-size: 18px;
  }
  .cart-table.cart-table-head {
    .cart-item {
      background: transparent;
      min-height: auto;
      padding-bottom: 0;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
  .cart-list {
    padding: 0 15px;
  }
  .cart-checkout {
    padding: 0 15px;
  }
}

@media screen and (min-width: 992px) {
  .cart-table .cart-table-price {
    width: 200px;
    text-align: center;
  }
  .cart-list {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
  }
  .orderbar .orderbar-total {
    display: block;
  }
  .orderbar .order {
    font-size: 24px;
    line-height: 24px;
  }
  .cart-checkout {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

@media (max-width: 992px) {
  .cart-table-head {
    display: none;
  }
  .orderbar {
    overflow: hidden;
    background: white;
  }
  .sticky-top {
    position: relative;
    top: 0;
    z-index: 0;
  }
}
</style>
