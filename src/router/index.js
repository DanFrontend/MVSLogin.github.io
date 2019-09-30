import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);


import Header from "../components/Counter/Header";
import Counter from "../components/Counter/Counter";


const router = new VueRouter({
    routes: [
        {
            path: '/header',
            component: Header
        },
        {
            path: '/counter',
            component: Counter
        }
    ]
});

export default router;