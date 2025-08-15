import { createApp } from 'vue'
import App from './App.vue'
//格式化样式
import '@/assets/less/reset.css'

//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入ElementIcon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入路由
import router from './router/index.js'
// 创建 Vue 应用实例并挂载
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
//使用ElementIcon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
