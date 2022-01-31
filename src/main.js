import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './index.css'
import App from './App.vue'
import router from './routes'
import store from './store'

window.bootstrap = bootstrap

createApp(App)
.use(router)
.use(store)
.use(BootstrapVue3)
.mount('#app')