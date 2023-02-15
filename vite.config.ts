import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//导入自动引入组件插件
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

//简化路径前缀
import { resolve } from 'path';
function pathResolve(dir:string){
    // 获取绝对路径的方法
    // let process;
    return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    resolve:{
        alias:[
            {
                // 简化路径前缀，使用绝对地址
                find:'@',
                replacement:(pathResolve('src'))
            }
        ],
    },
    //配置默认端口
    server: {
        host: 'localhost',
        port: 8000
    }
})
