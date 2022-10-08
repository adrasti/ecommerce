import { createStore } from "vuex";

export interface product {
  id: string;
  name: string;
  get_absolute_url: string;
  description: string;
  price: string;
  get_image: string;
  get_thumbnail: string;
}

export interface cartitem {
  product: product;
  quantity: number;
}

export type cartItemArr = Array<cartitem>;

export default createStore({
  state: {
    cart: {
      items: <cartItemArr>[],
    },
    isAuth: false,
    token: "",
    isLoading: false,
  },
  getters: {},
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart") || "[]");
      } else {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    addToCart(state, item: cartitem) {
      const exists = state.cart.items.filter(
        (i: cartitem) => i.product.id === item.product.id
      );

      if (exists.length) {
        exists[0].quantity = exists[0].quantity + item.quantity;
      } else {
        state.cart.items.push(item);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, item: cartitem) {
      state.cart.items = state.cart.items.filter(
        (i) => i.product.id !== item.product.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeEverything(state){
      state.cart.items = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  actions: {},
  modules: {},
});
