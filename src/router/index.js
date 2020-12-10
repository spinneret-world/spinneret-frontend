import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue")
  },
  {
    path: "/admin",
    name: "Spinneret Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auth.vue")
  },
  {
    path: "/admin/users",
    name: "Spinneret Admin | Users",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserListing.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
