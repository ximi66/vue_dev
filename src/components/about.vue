<template>
  <div class="about">
    <Row>
      <Col span="8" v-for="item in msg" :key="item.name">
        <img :src="item.img" alt="">
        {{item.name}}
      </Col>
    </Row>
  </div>
</template>

<script>
import { synLogInfoApi } from "@/api/about";


export default {
  name: 'about',
  data () {
    return {
      msg: []
    }
  },
  methods: {
    getData() {
      synLogInfoApi({
        applyNo: this.msg
      }).then(xhr => {
        this.msg = xhr.data.foods
      });
    }
  },
  created() {
    this.getData();
  },
}
</script>

<style scoped lang="less">

</style>
