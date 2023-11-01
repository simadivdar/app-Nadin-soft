import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
const isGuest =(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (localStorage.getItem("userName")) {
    next("/app");
    return;
  }  
  next();
};
const isAuthenticated = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (!localStorage.getItem("userName")) {
    next("/");
    return;
  }
  next();
};

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Welcome", component:() => import("./pages/Welcome.vue"),beforeEnter: isGuest },
  { path: "/app", name: "Bar", component:() => import("./pages/Bar.vue") , children: [
    {
      path: "",
      name: "Dashboard",
      component: () => import("./pages/Dashboard.vue"),
      beforeEnter: isAuthenticated
    }, {
      path: "/Todo",
      name: "Todo",
      component: () => import("./pages/Todo.vue"),
      beforeEnter: isAuthenticated
    }, {
      path: "/Weather",
      name: "Weather",
      component: () => import("./pages/Weather.vue"),
      beforeEnter: isAuthenticated
    },{
      path: "/Profile",
      name: "Profile",
      component: () => import("./pages/Profile.vue"),
      beforeEnter: isAuthenticated
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

