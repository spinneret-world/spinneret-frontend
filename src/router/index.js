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
    path: "/experiences",
    name: "Experiences",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShowListing.vue")
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
  },
  {
    path: "/admin/blog",
    name: "Spinneret Admin | Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/BlogListing.vue")
  },
  {
    path: "/admin/blog/add",
    name: "Spinneret Admin | Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/BlogAddEdit.vue")
  },
  {
    path: "/admin/blog/edit/:id",
    name: "Spinneret Admin | Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/BlogAddEdit.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
