import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Welcome", component:() => import("./pages/Welcome.vue") },
  { path: "/app", name: "Bar", component:() => import("./pages/Bar.vue") , children: [
    {
      path: "",
      name: "Dashboard",
      component: () => import("./pages/Dashboard.vue")
    }, {
      path: "/Todo",
      name: "Todo",
      component: () => import("./pages/Todo.vue")
    }]},
  { path: "/:pathMatch(.*)*", name: " NotFound", component: () => import("./components/notFound.vue")},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");

