<template>
  <div>
    <div>减1:{{count}}</div>
    <button @click="rem">-1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    rem () {
      this.$store.commit('remove')
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>
