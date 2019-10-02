import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter);


import Header from "../components/Counter/Header";
import Counter from "../components/Counter/Counter";
import PageHeader from "../components/PageHeader";
import SingleHeader from "../components/Counter/SingleHeader";

const router = new VueRouter({
    routes: [
        {
            path: '/header',
            name: 'header',
            component: Header
        },
        {
            path: '/counter',
            name: 'counter',
            component: Counter
        },
        {
            path: '/mvs',
            name: 'mvs',
            component: PageHeader
        },
        {
            path: '/header/:id',
            name: 'header_id',
            component: SingleHeader
        }
    ]
});

export default router;