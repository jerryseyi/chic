import {createRouter, createWebHistory } from "vue-router";
import dashboard from "../components/dashboard.vue";
import ChicProducts from "../components/products/chic-products.vue";
import ShowProduct from "../components/products/show-product.vue";
import Login from "@/components/auth/Login.vue";
import CreateProduct from "@/components/products/create-product.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: dashboard
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard
        },
        {
            path: '/products',
            name: 'chic-products',
            component: ChicProducts
        },
        {
          path: '/products/create',
          name: 'create-product',
          component: CreateProduct
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