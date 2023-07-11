const path = require("path");

module.exports = {
  configureWebpack: (config) => {
    config.resolve = {
      // 配置解析别名
      extensions: [".js", ".json", ".vue", ".ts"], //这里要添加'.ts'
      alias: {
        "@": path.resolve(__dirname, "./src"),
        components: path.resolve(__dirname, "./src/components"),
        common: path.resolve(__dirname, "./src/common"),
        api: path.resolve(__dirname, "./src/api"),
        router: path.resolve(__dirname, "./src/router"),
        views: path.resolve(__dirname, "./src/views"),
        public: path.resolve(__dirname, "public"),
      },
    };
  },
  //scss全局变量 change-mark
  css: {
    // 启用 CSS modules
    requireModuleExtension: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps，一般不建议开启
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "@/scss/variables.scss";`,
      },
    },
  },
};
