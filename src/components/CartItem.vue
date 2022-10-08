<template>
  <div class="cart-table">
    <div class="cart-item cart-table-padding"></div>
    <div class="cart-item cart-table-pic">
      <img :src="item.product.get_thumbnail" alt="" />
    </div>
    <div class="cart-item cart-table-name">
      <div>
        <p class="cart-table-title">
          <router-link :to="item.product.get_absolute_url">{{
            item.product.name
          }}</router-link>
        </p>
      </div>
    </div>
    <div class="cart-item cart-table-quantity">
      <div class="quantity">
        <div
          class="dropdown"
          @click="showList = !showList"
          v-show="showDropdown"
        >
          <div class="input">
            <span>{{ item.quantity }}</span>
            <p class="multiSel"></p>
            <svg
              class="svg-inline"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"
              ></path>
            </svg>
          </div>
          <div class="list">
            <div class="multiSelect">
              <div class="drop" v-show="showList">
                <ul>
                  <li @click="setQuantity(1)"><span>1</span></li>
                  <li @click="setQuantity(2)"><span>2</span></li>
                  <li @click="setQuantity(3)"><span>3</span></li>
                  <li @click="setQuantity(4)"><span>4</span></li>
                  <li @click="setQuantity(5)"><span>5</span></li>
                  <li @click="setQuantity(6)"><span>6</span></li>
                  <li @click="setQuantity(7)"><span>7</span></li>
                  <li @click="setQuantity(8)"><span>8</span></li>
                  <li @click="setQuantity(9)"><span>9</span></li>
                </ul>
                <span class="more" @click="switchList">+10</span>
              </div>
            </div>
          </div>
        </div>
        <span class="form-control" v-show="formControlText && showList">{{
          formControlText
        }}</span>
        <input
          ref="input"
          class="text-quantity"
          v-show="showInput"
          data-val="true"
          data-val-max="La quantité maximum autorisée est de 1000"
          data-val-min="La quantité minimum autorisée est de 1"
          data-val-required="La quantité minimum autorisée est de 1"
          max="1000"
          min="1"
          name="quantity"
          type="number"
          v-model="quantity"
          @blur="handleBlur"
          @keyup.enter="handleBlur"
        />
      </div>
    </div>
    <div class="cart-item cart-table-price">
      <span>{{ getPrice }}₽</span>
    </div>
    <div class="cart-item cart-table-remove">
      <svg
        @click="removeFromCart"
        class="svg-inline"
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="xmark"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CartItem",
  props: ["initialItem"],
  emits: ["removeFromCart"],
  setup(props, { emit }) {
    const store = useStore();

    const item = props.initialItem;

    const quantity = ref<number>(props.initialItem.quantity);

    const input = ref<HTMLInputElement | null>();

    const formControlText = ref<string>("");

    function updateCart() {
      localStorage.setItem("cart", JSON.stringify(store.state.cart));
    }

    function setQuantity(x: number) {
      item.quantity = x;
      updateCart();
    }

    function switchList() {
      showList.value = false;
      showDropdown.value = !showDropdown.value;
      showInput.value = !showInput.value;
      if (input.value) input.value.focus();
    }

    function handleBlur() {
      const n = quantity.value;
      if (n && !isNaN(n) && n % 1 == 0 && n > 0 && n < 100) {
        item.quantity = quantity.value;
        updateCart();
        showList.value = false;
        showDropdown.value = true;
        showInput.value = false;
      } else {
        if (input.value) input.value.focus();
      }
    }

    const getPrice = computed(() => {
      return (Number(item.quantity) * Number(item.product.price)).toFixed(0);
    });

    function removeFromCart() {
      emit("removeFromCart", item);
    }

    const showList = ref<Boolean>(false);
    const showInput = ref<Boolean>(false);
    const showDropdown = ref<Boolean>(true);

    watch(showList, () => {
      input.value?.focus();
    });
    watch(quantity, () => {
      if (!quantity.value || quantity.value < 0) {
        formControlText.value = "Минимальное количество: 1";
        return;
      } else if (quantity.value > 100) {
        formControlText.value = "Максимальное количество: 100";
        return;
      } else if (quantity.value % 1 != 0) {
        formControlText.value = "Пожалуйста, введите целое число";
      } else formControlText.value = "";
    });

    return {
      item,
      showList,
      showInput,
      showDropdown,
      switchList,
      input,
      quantity,
      formControlText,
      setQuantity,
      handleBlur,
      removeFromCart,
      getPrice,
    };
  },
});
</script>
