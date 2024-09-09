import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import ShoesPage from "../views/Shoes/ShoesPage.vue";
import Brand from "../views/Brand/Brand.vue";
import ContactPage from "../views/Contact/ContactPage.vue";
import CategoryShoes from "../views/Shoes/CategoryShoes.vue";
import Signin from "../views/Signin.vue";
import AdminDashboard from "../views/Admin/AdminDashboard.vue";
import Wishlist from "../views/Shoes/Wishlist.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shoe",
    name: "ShoesPage",
    component: ShoesPage,
  },
  {
    path: "/brand",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/category/:categoryId",
    name: "CategoryShoes",
    component: CategoryShoes,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/admin",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
