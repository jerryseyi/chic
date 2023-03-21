import {createRouter, createWebHistory } from "vue-router";
import dashboard from "../components/dashboard.vue";
import ChicProducts from "../components/products/chic-products.vue";
import ShowProduct from "../components/products/show-product.vue";
import Login from "@/components/auth/Login.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: dashboard
        },
        {
            path: '/products',
            name: 'chic-products',
            component: ChicProducts
        },
        {
            path: '/products/:id',
            name: 'show-product',
            component: ShowProduct,
            props: true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});

export default router;