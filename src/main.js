import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/less/index.less'
import { createPinia } from 'pinia/dist/pinia'
import store from './store/index.js'
import './api/mock.js'
import axios from 'axios'

const routes = [
    {
        path: '/',
        component: ()=> import('./views/MainPage.vue'),
        redirect: '/home',
        children: [
            {
                path: '/',
                name: 'home',
                component: ()=> import('./views/home/HomePage.vue')
            },
            {   path: '/user',
                name: 'user',
                component: () => import('./views/User/UserUser.vue')
            }
        ]
    }
    
] //子路由和父路由



const router = createRouter({
    history:createWebHashHistory(),
    routes
}) //声明路由

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(createPinia())
app.mount('#app') //使用路由和element ui

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  } //使用图标