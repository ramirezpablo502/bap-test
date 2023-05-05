import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "IndexView",
    component: IndexView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
