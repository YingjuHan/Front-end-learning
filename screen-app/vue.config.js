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
    // css预设器配置项
    loaderOptions: {
      sass:{
        additionalData: `@import "@/scss/variables.scss";`,
      },
      css:{
        module:{
          auto:()=>true
        }
      }
    },
    // requireModuleExtension: true
  },
};
