import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   count: 0
  // },
  // mutations: {
  //   add (state) {
  //     state.count++
  //   },
  //   add1 (state, step) {
  //     state.count = state.count + step
  //   },
  //   remove (state) {
  //     state.count = 0
  //   },
  //   remove1 (state) {
  //     state.count--
  //   },
  //   remove2 (state, step) {
  //     state.count = state.count - step
  //   }
  // },
  // // 处理异步操作
  // actions: {
  //   addAsync (context) {
  //     setTimeout(() => {
  //       // 调用mutations里的函数
  //       context.commit('add')
  //     }, 1000)
  //   }
  // },
  // // 只对state中的数据起到修饰作用，并不会改变数据
  // getters: {
  //   showNum (state) {
  //     return '数量为【' + state.count + '】'
  //   }
  // },
  // modules: {
  // }

  state: {
    list: [],
    inputValue: 'aaa'
  },
  mutations: {
    initList (state, list) {
      state.list = list
    },
    setInputValue (state, val) {
      state.inputValue = val
    }
  },
  actions: {
    getList (context) {
      axios.get('./list.json').then(({ data }) => {
        context.commit('initList', data)
      })
    }
  }
})
