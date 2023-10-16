import { createRouter, createWebHistory } from "vue-router";
import SignupForm from "../views/SignupForm.vue";
import LoginForm from "../views/LoginForm.vue";
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
            path: "/login",
            name: "login",
            component: LoginForm,
        },
        {
            path: "/signup",
            name: "signup",
            component: SignupForm,
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
        },
    ],
});

export default router;