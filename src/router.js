import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HelloWorld'
import Login from './screen/Acess'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/login',
        component: Login
    }]
})