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
            path: "/edit_profile",
            name: "Edit Profile",
            component: () => import("../views/Edit_Profile.vue"),
        },
        {
            path: "/campaign",
            name: "Campaign",
            component: () => import("../views/Campaign.vue"),
        },
        {
            path: "/product_detail",
            name: "Product Detail",
            component: () => import("../views/ProductDetail.vue"),
        },
        {
            path: "/add_product",
            name: "Add Product",
            component: () => import("../views/AddProductForm.vue"),
        },
    ],
});

export default router;
