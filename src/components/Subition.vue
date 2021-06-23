<template>
  <div>
    <div>减1:{{count}}</div>
    <button @click="rem">重置</button>
    <button @click="rem1">-111</button>
    <button @click="rem2">-n</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    rem () {
      this.$store.commit('remove')
    },
    // 使用mapMutations方式2
    ...mapMutations(['remove1', 'remove2']),
    rem1 () {
      this.remove1()
    },
    // 第二种传参
    rem2 () {
      this.remove2(2)
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
