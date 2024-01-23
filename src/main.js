import { createApp } from 'vue'
import './app/style.css'
import App from './app/App.vue'
import store from "./app/store/store.js";

createApp(App).use(store).mount('#app')
