// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
// const Progile = () => import('../views/profile/Progile')



const routerHistory = createWebHistory()
// 安装插件
// Vue.use(VueRouter)


const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    // {
    //     path:'/progile',
    //     component:Progile
    // },
    {
        path:'/profile',
        component:Profile
    }

]
const router = createRouter({
    routes,
    history: routerHistory,
})

export default router