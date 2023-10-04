import { createRouter, createWebHistory } from "vue-router";
import Authentication from "../views/Authentication.vue";
import Home from "../views/Home.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/authentication",
            name: "Authentication",
            component: Authentication,
        },
        {
            path: "/profile",
            name: "Profile",
            component: () => import("../views/Profile.vue"),
        },
        {
            path: "/Campaign",
            name: "Campaign",
            component: () => import("../views/Campaign.vue"),
        }
    ],
});

export default router;
