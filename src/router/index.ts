import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/login/index.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        // component: Login
        component: () => import("../views/login/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
