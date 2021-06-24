<template>
  <div>
    <my-addition></my-addition>
    <h1>--------------------------</h1>
    <my-subtion></my-subtion>

    <div id="app1">
      <a-input placeholder="请输入" class="my_ipt" :value='inputValue' @change="handleChange" />
      <a-button type="primaty">添加事项</a-button>

      <a-list bordered :dataSource="list" class="dt_list">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-checkbox>{{item.info}}</a-checkbox>
          <a slot="actions">删除</a>
        </a-list-item>
        <div slot="footer" class="footer">
          <span>0条剩余</span>
          <a-button-group>
            <a-button type="primary">全部</a-button>
            <a-button>未完成</a-button>
            <a-button>已完成</a-button>
          </a-button-group>
          <a>清除已完成</a>
        </div>
      </a-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Addtion from './components/Addition.vue'
import Subition from './components/Subition.vue'
export default {
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list', 'inputValue'])
  },
  components: {
    'my-addition': Addtion,
    'my-subtion': Subition
  },
  methods: {
    handleChange (e) {
      console.log(e.target.value)
      this.$store.commit('setInputValue', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
#app1 {
  margin-top: 20px;
  padding: 10px;
  .my_ipt {
    width: 500px;
    margin-right: 10px;
  }
  .dt_list {
    width: 500px;
    margin-top: 10px;
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
