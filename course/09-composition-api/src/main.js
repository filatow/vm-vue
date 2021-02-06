import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './translatePlugin'

const app = createApp(App)

const ru = {
  app: {
    title: 'Как работают плагины во Vue?',
    changeBtn: 'Переключить язык'
  }
}
const en = {
  app: {
    title: 'How do plugins work in Vue?',
    changeBtn: 'Change language'
  }
}

app.use(translatePlugin, {ru, en})
app.mount('#app')
// app.directive('focus', {
//   mounted(el) {
//     console.log("focus :: el", el)
//     el.focus()
//   }
// })
