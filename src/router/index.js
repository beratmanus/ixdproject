import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tables from "../views/Tables.vue";
import NotFound from "../views/NotFound.vue";
import Wijnen from "../views/wijnen/Wijnen.vue";
import WijnDetails from "../views/wijnen/WijnDetails.vue";
import Number from "../views/Number.vue";
import QRcode from "../views/QRcode";
import Cart from "../views/Cart.vue";
import Bevestigen from "../views/Bevestigen.vue";
import End from "../views/End.vue";

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
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/bevestigen",
    name: "Bevestigen",
    component: Bevestigen
  },
  {
    path: "/end",
    name: "End",
    component: End
  },

  //redirect 
  {
    path: "/qrcode",
    name: "QRcode",
    component: QRcode,
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
