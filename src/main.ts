import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./pages/welcome.vue";
import  NotFound from "./components/notFound.vue";

const routes = [
  { path: "/", name: "Welcome-", component: Welcome },
  { path: "/:pathMatch(.*)*", name: " NotFound-", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");

