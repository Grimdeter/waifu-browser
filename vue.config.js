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
  publicPath: "/waifu-browser/",
  outputDir: "docs",
};
