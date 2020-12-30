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
    path: "/shop",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shop.vue")
  },
  {
    path: "/shop/:id",
    name: "Spinneret | Shop",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductDetail.vue")
  },
  {
    path: "/order",
    name: "Spinneret | Order",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order.vue")
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
  },
  {
    path: "/admin/experiences",
    name: "Spinneret Admin | Experiences",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/ShowListing.vue")
  },
  {
    path: "/admin/experiences/add",
    name: "Spinneret Admin | Experiences",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/ShowAddEdit.vue")
  },
  {
    path: "/admin/experiences/edit/:id",
    name: "Spinneret Admin | Experiences",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/ShowAddEdit.vue")
  },
  {
    path: "/admin/products",
    name: "Spinneret Admin | Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/ProductListing.vue")
  },
  {
    path: "/admin/products/add",
    name: "Spinneret Admin | Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/ProductAddEdit.vue")
  },
  {
    path: "/admin/products/edit/:id",
    name: "Spinneret Admin | Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/ProductAddEdit.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
