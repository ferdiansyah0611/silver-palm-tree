import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'

const routes = [
	{
		path: '/',
		component: Home
	}
]

export default createRouter({
	history: createWebHashHistory(),
	routes
})