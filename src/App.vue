<template>
  <div>
    <my-addition></my-addition>
    <h1>--------------------------</h1>
    <my-subtion></my-subtion>
  </div>
</template>

<script>
import Addtion from './components/Addition.vue'
import Subition from './components/Subition.vue'
export default {
  data () {
    return {}
  },
  components: {
    'my-addition': Addtion,
    'my-subtion': Subition
  }
}
</script>
