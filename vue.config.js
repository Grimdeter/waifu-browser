const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
      },
    },
    publicPath: process.env.NODE_ENV === "production" ? "/waifu-browser/" : "./",
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/waifu-browser/" : "./",
});

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/waifu-browser/" : "./",
};
