export default {
  namespaced: true,
  state() {
    return {
      counter: 1
    }
  },
  mutations: {
    add(state, payload) {
      if (payload && payload.value) {
        state.counter += payload.value
      } else {
        state.counter++
      }
    }
  },
  actions: {
    incrementAsync(context, payload) {
      console.log(context)
      setTimeout(() => {
        context.commit('add', payload)
      }, payload.delay);
    }
  },
  getters: {
    counter(state) {
      // if (state.counter > 50) {
      //   return 0
      // }
      return state.counter
    },
    doubleCounter(state, getters) {
      // console.log("🖨️ :: doubleCounter :: state", state)
      // console.log("🖨️ :: doubleCounter :: getters", getters)
      // console.log("🖨️ :: doubleCounter :: rootState", rootState)
      // console.log("🖨️ :: doubleCounter :: rootGetters", rootGetters)
      return getters.counter * 2
    }
  }
}