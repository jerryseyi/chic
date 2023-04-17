import {createRouter, createWebHistory} from "vue-router";
import dashboard from "../components/dashboard.vue";
import ChicProducts from "../components/products/chic-products.vue";
import ShowProduct from "../components/products/show-product.vue";
import Login from "@/components/auth/Login.vue";
import CreateProduct from "@/components/products/create-product.vue";
import EditProduct from "@/components/products/edit-product.vue";
import Register from "@/components/auth/Register.vue";
import CreateCategory from "@/components/categories/CreateCategory.vue";
import CategoryIndex from "@/components/categories/CategoryIndex.vue";
import EditCategory from "@/components/categories/EditCategory.vue";

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
            path: '/products/:id/edit',
            name: 'edit-product',
            component: EditProduct,
            props: true
        },
        {
            path: '/categories/create',
            name: 'create-category',
            component: CreateCategory
        },
        {
            path: '/categories',
            name: 'CategoryIndex',
            component: CategoryIndex
        },
        {
            path: '/categories/:id/edit',
            name: 'EditCategory',
            component: EditCategory,
            props: true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
});

export default router;