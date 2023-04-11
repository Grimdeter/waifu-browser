const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
      },
    },
    // publicPath: process.env.NODE_ENV === "production" ? "/waifu-browser/" : "./",
    publicPath: "./",
  },
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === "production" ? "/waifu-browser/" : "./",
  publicPath: "./",
});

module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/waifu-browser/" : "./",
  publicPath: "./",
};
