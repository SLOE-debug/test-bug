import { createApp } from "vue";
import App from "@/App";

import "element-plus/dist/index.css";

// import "element-plus/theme-chalk/dark/css-vars.css";
// import { useDark, useToggle } from "@vueuse/core";

// const isDark = useDark();
// const toggleDark = useToggle(isDark);

let app = createApp(App).mount("#app");