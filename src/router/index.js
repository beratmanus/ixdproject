import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tables from "../views/Tables.vue";
import NotFound from "../views/NotFound.vue";
import Wijnen from "../views/wijnen/Wijnen.vue";
import WijnDetails from "../views/wijnen/WijnDetails.vue";
import Number from "../views/Number.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/number",
    name: "Number",
    component: Number,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/wijnen",
    name: "Wijnen",
    component: Wijnen,
  },
  {
    path: "/wijnen/:id",
    name: "WijnDetails",
    component: WijnDetails,
    props: true
  },
  //redirect 
  {
    path: "/all-jobs",
    redirect: "/jobs"
  },
  // 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
