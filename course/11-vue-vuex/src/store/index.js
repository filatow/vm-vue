import { createStore, createLogger } from 'vuex'
import counterModule from './modules/counter.js'

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule
  },
  state() {
    return {
      appTitle: 'Vuex Working!'
    }
  },
  getters: {
    uppercaseAppTitle(state) {
      return state.appTitle.toUpperCase()
    }
  }
})