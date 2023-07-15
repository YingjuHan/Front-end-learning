import "./scss/element-variables.scss";
import "./assets/font/font.scss"
import "normalize.css";
import { createApp } from "vue";

import { loadAllPlugins } from "./plugins";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
loadAllPlugins(app);

app.use(store).use(router).mount("#app");
