import { createApp } from "vue";
import App from "@/App";
import { ElLoading } from "element-plus";

import "element-plus/dist/index.css";
import router from "./Router/Index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// import "element-plus/theme-chalk/dark/css-vars.css";
// import { useDark, useToggle } from "@vueuse/core";

// const isDark = useDark();
// const toggleDark = useToggle(isDark);

let app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElLoading).use(router).mount("#app");
