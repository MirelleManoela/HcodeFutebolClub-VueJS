import Vue from "vue";
import VueRouter from "vue-router";

import Home from './../components/HCodeSectionBanner'
import News from './../components/HCodeSectionNews'
import Notice from './../components/HCodeSectionNewsNotice'
import HCode404 from './../components/HCode404'
Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',

    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        alias: '/notices',
        component: News
    }, {
        path: '/news/:idnotice',
        name: 'notice',
        component: Notice
    },
    {
        path: '/admin',
        redirect: '/'
    }, {
        path: '*',
        component: HCode404
    }
]

})