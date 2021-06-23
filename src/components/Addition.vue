<template>
  <div>
    <div>加1:{{$store.state.count}}</div>
    <button @click="btn">+1</button>
    <button @click="btn1">+n</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btn () {
      this.$store.commit('add')
    },
    btn1 () {
      // 可以传参
      this.$store.commit('add1', 2)
    }
  }
}
</script>
