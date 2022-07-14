import { createRouter, createWebHistory } from 'vue-router'

import Layout from './components/Layout.vue'

import Topic from './pages/Topic.vue'
import Settings from './pages/Settings.vue'
import Today from './pages/Today.vue'
import All from './pages/All.vue'

const routes = [
    { name: "all", component: All, path: "/all" },
    { name: "today", component: Today, path: "/" },
    { name: "topic", component: Topic, path: "/topic/:topicName" },
    { name: "settings", component: Settings, path: "/settings" },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
})

export default router