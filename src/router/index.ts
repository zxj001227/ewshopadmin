import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router";
//导入控制台的路由
import dashboard from '@/router/modules/dashboard'

// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '@/views/Home.vue'
import Login from '@/views/login/index.vue'

//拿到modules文件下所有的ts文件 都存放在routeModuleList集合里
const modules: any = import.meta.glob("./modules/**/*.ts", {eager: true});
const routeModuleList: RouteRecordRaw[] = [];
//自取读取到modules下的ts目录
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
});
console.log(routeModuleList)


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    { path: '/', component: Home },
    { path: '/login', name:'login',component: Login },
]
//展开 合并到一起
const baseRoutes  = [...routes,...routeModuleList]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes:baseRoutes, // `routes: routes` 的缩写
})

//设置全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.name != 'login'){
        if(!localStorage.getItem('token')){
            next({
                path:'/login'
            });
        }
    }
    next();
})

export {routeModuleList}
export default router;