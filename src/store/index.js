import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    add1 (state, step) {
      state.count = state.count + step
    },
    remove (state) {
      state.count = 0
    },
    remove1 (state) {
      state.count--
    },
    remove2 (state, step) {
      state.count = state.count - step
    }
  },
  actions: {
  },
  modules: {
  }
})
