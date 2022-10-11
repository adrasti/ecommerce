<template>
  <h1 class="categoryHeader">{{ categoryName }}</h1>
  <div class="container category-container">
    <div class="page-nav">
      <div class="pages">
        <nav>
          <ul class="pagination">
            <li
              class="page-item"
              v-for="pageNumber in pages"
              :key="pageNumber"
              :class="{ active: pageNumber == currentPage }"
            >
              <router-link
                @click="setPage(pageNumber)"
                class="page-link"
                :to="{ path: `/${category}/page/${pageNumber}` }"
                >{{ pageNumber }}</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-auto d-none d-xl-block">
        <span class="c-products__count"></span>
      </div>
    </div>
  </div>
  <div class="container category-container">
    <div class="productItem" v-for="product in products" :key="product.id">
      <div class="product-inner">
        <ProductBox :prdct="product"></ProductBox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosError } from "axios";
import { defineComponent, onMounted, ref, watch, computed, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductBox from "../components/ProductBox.vue";

export default defineComponent({
  components: {
    ProductBox: ProductBox,
  },
  setup() {
    const root = inject("root");
    const products = ref([]);
    const categoryName = ref("");
    const category = ref("");
    const route = useRoute();
    const router = useRouter();
    const pageSize = ref<number>(10);
    const currentPage = ref<number>(1);
    const total = ref<number>(0);
    async function getCategory() {
      const category_slug = route.params.category_slug;
      const page_num = route.params.page_num;

      let data;
      if (page_num) {
        currentPage.value = Number(page_num);
        await axios
          .get(
            `${root}/products/${category_slug}?size=${pageSize.value}&page=${page_num}`
          )
          .then((response) => {
            data = response.data;
            products.value = data.products;
            category.value = String(data.name).toLowerCase();
            if (data.name == "Headphones") categoryName.value = "Наушники";
            else if (data.name == "Keyboards")
              categoryName.value = "Клавиатуры";
            else if (data.name == "Mice") categoryName.value = "Мыши";
          })
          .catch((e: Error | AxiosError) => {
            if (axios.isAxiosError(e)) {
              if (e.response) {
                if (e.response.status === 404) {
                  router.push("/404");
                }
              }
            }
            console.log(e);
          });
      } else {
        await axios
          .get(
            `${root}/products/${category_slug}?size=${pageSize.value}&page=1`
          )
          .then((response) => {
            data = response.data;
            products.value = data.products;
            category.value = String(data.name).toLowerCase();
            if (data.name == "Headphones") categoryName.value = "Наушники";
            else if (data.name == "Keyboards")
              categoryName.value = "Клавиатуры";
            else if (data.name == "Mice") categoryName.value = "Мыши";
          })
          .catch((e: Error | AxiosError) => {
            if (axios.isAxiosError(e)) {
              if (e.response) {
                if (e.response.status === 404) {
                  router.push("/404");
                }
              }
            }
            console.log(e);
          });
      }
    }

    async function getCount() {
      const category_slug = route.params.category_slug;
      await axios
        .get(`${root}/count/${category_slug}`)
        .then((response) => {
          total.value = Number(response.data);
        })
        .catch((e: Error | AxiosError) => {
          if (axios.isAxiosError(e)) {
            if (e.response) {
              if (e.response.status === 404) {
                router.push("/404");
              }
            }
          }
          console.log(e);
        });
    }

    const pages = computed(() => {
      return Math.ceil(total.value / pageSize.value);
    });

    function setPage(n: number) {
      currentPage.value = n;
    }

    onMounted(() => {
      getCount();
      getCategory();
    });

    watch(route, (to, from) => {
      if (to.name === "Category") {
        currentPage.value = 1;
        getCount();
        getCategory();
      } else if (to.name === "page") {
        getCount();
        getCategory();
      }
    });

    return { products, categoryName, pages, currentPage, category, setPage };
  },
});
</script>

<style lang="scss">
.categoryHeader {
  text-align: center;
  margin-bottom: 28px;
  font-size: 32px;
}
.category-container {
  display: flex;
  flex-wrap: wrap;
}

.product-inner {
  width: 80%;
  margin: auto;
}

.productItem {
  width: 100%;
  flex: 0 0 100%;
  transition: box-shadow 0.2s ease-in-out;
  background: white;
  margin: 5px;
  &:hover {
    box-shadow: 0 3px 16px 0 rgb(0 0 0 / 11%);
    .item-meta {
      transform: translate3d(0px, -16.9886px, 0px);
    }
  }
}

.page-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 0;
  margin-left: 0;
  flex-wrap: wrap;
}

.pages {
  ul {
    display: flex;
  }
  margin-left: 5px;
}

.page-item.active .page-link {
  background-color: #f7f3f3;
  color: inherit;
  -webkit-box-shadow: inset 0 0 0 2px #f46036;
  box-shadow: inset 0 0 0 2px #f46036;
}

.page-item {
  margin-right: 3px;
}

.page-link {
  min-width: 34px;
  text-align: center;
  color: #919191;
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
  background-color: white;
  color: #919191;
  font-weight: 500;
  border: none;
}
@media (max-width: 576px) {
  .category-container {
    padding-left: 5px;
  }
}
@media (min-width: $breakpoint-md) {
  .productItem {
    width: 48%;
    flex: 0 0 48%;
  }
  .product-inner {
    padding: 0 30px;
    width: 100%;
  }
}

@media (min-width: $breakpoint-lg) {
  .productItem {
    width: 32%;
    flex: 0 0 32%;
  }
  .product-inner {
    padding: 0 15px;
  }
}

@media (min-width: $breakpoint-xl) {
  .productItem {
    width: 24%;
    flex: 0 0 24%;
  }
}
</style>
