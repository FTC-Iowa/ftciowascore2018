import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './components/HomePage.vue'

import LeagueForm from './components/forms/LeagueForm.vue'

const routes = [
    { path: '/', component: HomePage},
    { path: '/league', component: LeagueForm }
]

export default new VueRouter({
    mode: 'history',
    routes
})