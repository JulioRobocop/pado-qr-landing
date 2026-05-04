import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import i18n from "./i18n/index.ts";
import "flag-icons/css/flag-icons.min.css";

createApp(App).use(i18n).mount("#app");
