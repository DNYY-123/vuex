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
  // 处理异步操作
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // 条用mutations里的函数
        context.commit('add')
      }, 1000)
    }
  },
  modules: {
  }
})
