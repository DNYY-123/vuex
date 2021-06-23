<template>
  <div>
    <div>加1:{{$store.state.count}}</div>
    <button @click="btn">+11</button>
    <button @click="btn1">+n</button>
    <button @click="btn2">延时+n</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btn () {
      // commit用来调用mutations里的函数
      this.$store.commit('add')
    },
    btn1 () {
      // 可以传参
      this.$store.commit('add1', 2)
    },
    btn2 () {
      // dispatch用来调用actions里的函数
      // 传参与commit相同
      this.$store.dispatch('addAsync')
    }
  }
}
</script>
