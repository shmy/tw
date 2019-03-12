import Vue from 'vue'
import VueRouter from 'vue-router' // Vue Router is the official router for Vue.js https://router.vuejs.org/

Vue.use(VueRouter)
const loadComponent = name => () => import(`@/views/${name}.vue`)
export default new VueRouter({
    base: '/',
    routes: [
        {
            path: '/',
            redirect: '/agent'
        },
        {
            path: '/dashboard',
            component: loadComponent('dashboard')
        },
        {
            path: '/agent',
            component: loadComponent('agent')
        },
        {
            path: '/cruise',
            component: loadComponent('cruise')
        },
        {
            path: '/help',
            component: loadComponent('help')
        }
    ]
})