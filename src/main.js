import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/counter'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/global.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(store).use(router).use(ElementPlus).use(pinia).mount('#app')
