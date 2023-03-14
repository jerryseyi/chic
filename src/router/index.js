import {createRouter, createWebHistory } from "vue-router";
import dashboard from "../components/dashboard.vue";
import ChicProducts from "../components/products/chic-products.vue";

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
        }
    ]
});

export default router;