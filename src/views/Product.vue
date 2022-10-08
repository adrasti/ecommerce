<template>
  <div class="container">
    <div class="row">
      <div class="product-top">
        <div class="product-image">
          <img :src="product.get_image" alt="" />
        </div>
        <div class="product-basic">
          <div class="container">
            <h1 class="product-title">{{ product.name }}</h1>
            <div class="row">
              <button class="product-cart" @click="addToCart">
                <div>{{ product.price }}₽</div>
                <div>Добавить в корзину</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="product-bottom">
      <div class="row s-header">
        <h2>Описание</h2>
      </div>
      <p class="row product-description">{{ product.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { cartitem, product } from "../store/index";

export default defineComponent({
  name: "Product",
  setup() {
    const root = inject('root');
    const router = useRouter();
    const store = useStore();
    const quantity = ref<number>(1);
    const product = ref<product>({
      id: "",
      name: "",
      get_absolute_url: "",
      description: "",
      price: "",
      get_image: "",
      get_thumbnail: "",
    });
    async function getProduct() {
      const route = useRoute();
      const category_slug = route.params.category_slug;
      const product_slug = route.params.product_slug;

      let data;

      try {
        const fdata = await fetch(
          `${root}/products/${category_slug}/${product_slug}`
        );
        if (fdata.status == 404) {
          router.push("/404");
        }
        data = await fdata.json();
      } catch (e) {
        console.log(e);
      }

      product.value = data;
      document.title = data.name;
    }

    function addToCart() {
      const item: cartitem = {
        product: product.value,
        quantity: quantity.value,
      };
      store.commit("addToCart", item);
    }

    onMounted(() => {
      getProduct();
    });

    return { product, addToCart };
  },
});
</script>

<style scoped lang="scss">
.product-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2em;
  font-family: Nunito;
}

.product-top {
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.product-cart {
  margin-top: 4rem;
  padding: 0 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #24b358;
  color: white;
  margin-right: 12px;
  height: 48px;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 12px 18px;
  border-radius: 12px;
  display: inline-flex;
  text-align: center;
  transition: all 0.1s linear;
  -webkit-box-shadow: 0px 10px 30px 0px rgb(0 0 0 / 15%);
  -moz-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 30px 0px rgb(0 0 0 / 15%);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  border: none;
  div {
    margin: 0;
    padding: 0 12px 0 0;
    inline-size: max-content;
  }
  &:hover {
    transform: scale(1.01);
  }
}

.product-basic {
  flex: 1;
  .container {
    width: 80%;
  }
}

.product-image {
  img {
    height: 100%;
    width: 100%;
    border-radius: 10%;
  }
}

.product-bottom {
  p {
    font-size: 18px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-weight: 500;
  }
  margin-left: 20px;
  margin-right:20px;
}

@media (max-width: $breakpoint-lg) {
  .product-top {
    flex-direction: column;
    align-items: center;
  }
  .product-title {
    text-align: center;
    margin-top: 1rem;
  }
  .product-cart {
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
