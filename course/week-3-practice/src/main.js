import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './theme.css'

// console.log(store)
createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
