import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "hello-world",
    component: HelloWorld,
  },
];

export const router = createRouter({
  history: createWebHistory("/baseroute/"),
  routes,
});
