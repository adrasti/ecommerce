const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/ecommerce/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/components/css/root.scss";`,
      },
    },
  },
});
