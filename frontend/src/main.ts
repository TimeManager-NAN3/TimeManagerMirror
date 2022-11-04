import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import { useAuth } from "@/hook/useAuth";
import ToastPlugin from "vue-toast-notification";
// Import one of the available themes
// import "vue-toast-notification/dist/theme-default.css";
import "vue-toast-notification/dist/theme-sugar.css";

// Fix Property 'env' does not exist on type 'ImportMeta'.
declare global {
  interface ImportMeta {
    env: {
      VITE_URL_API: string;
    };
  }
}

loadFonts();

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .use(ToastPlugin, { position: "bottom-right" })
  .use((app, options) => {
    const auth = useAuth();
    auth.loginFromStorage();
  })
  .mount("#app");
