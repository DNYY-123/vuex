import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入ant-design-vue组件库
import Antd from 'ant-design-vue'
// 导入组件库样式表
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
