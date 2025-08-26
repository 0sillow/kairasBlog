import router from './router'
//引入naive的通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)
app.use(router)
app.mount('#app')
