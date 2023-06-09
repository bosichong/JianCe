import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import './assets/main.css'
import store from "@/store";

const app = createApp(App)
app.use(naive)
app.use(router)
app.use(store)
app.mount('#app')