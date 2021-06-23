<template>
  <div>
    <div>加1:{{$store.state.count}}</div>
    <button @click="btn">+1</button>
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
    }
  }
}
</script>
