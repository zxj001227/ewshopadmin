import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
//引入css文件
import './style/tailwind.css'
import './style/index.css'
//引入pinia状态管理
import { createPinia } from 'pinia'

// 5. 创建并挂载根实例
const app = createApp(App)
const pinia = createPinia()

//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(pinia)
app.mount('#app')
