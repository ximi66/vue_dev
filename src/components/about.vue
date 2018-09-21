<template>
  <div class="hello">
    about
  </div>
</template>

<script>
import { synLogInfoApi } from "@/api/about";


export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData() {
      synLogInfoApi({
        applyNo: this.msg
      }).then(xhr => {

      });
    }
  }
}
</script>

<style scoped>

</style>
