import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/new",
      name: "new",
      component: () => import(/* webpackChunkName: "new" */ "./views/New.vue")
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import(/* webpackChunkName: "edit" */ "./views/Edit.vue")
    }
  ]
});
