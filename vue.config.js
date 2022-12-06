const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
      },
    },
  },
  transpileDependencies: true,
});

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/waifu-browser/" : "/",
};
