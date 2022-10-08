import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

import Product from "../views/Product.vue";

import Cart from "../views/Cart.vue";

import Category from "../views/Category.vue";

import NotFound from "../components/404.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    alias: "/",
    component: HomeView,
  },
  {
    path: "/:category_slug/:product_slug",
    name: "Product",
    component: Product,
  },
  {
    path: "/:category_slug",
    name: "Category",
    component: Category,
    children: [
      {
        name:"page",
        path: "page/:page_num",
        component: Category,
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    alias: "/404",
    component: () => import("@/components/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
