<template>
  <div class="navBox">
    <ul class="nav">
      <li v-for="(item, index) in titles">
        <router-link :to="{path: '/' + item.value}" >{{ item.name }}</router-link>
      </li>
    </ul>
    <div>
      <Carousel v-model="value1" loop autoplay :autoplay-speed="autoplaySpeed">
        <CarouselItem>
          <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'page',
    data () {
      return {
        titles:[
          {
            name:'首页',
            value:'home'
          },
          {
            name:'沸点',
            value:'about'
          },
          {
            name:'小册',
            value:'a'
          },
          {
            name:'开源库',
            value:'a'
          },
          {
            name:'我的',
            value:'a'
          },
        ],
        value1: 0,
        autoplaySpeed:3000
      }
    },
    methods:{

    },
    mounted(){
      /*this.obj.name = 'xxm';
      this.obj.age = '112';
      this.$set(this.obj,"likes", 'eat')*/
    }
  }
</script>

<style scoped lang="less">
.navBox{
  padding-top: 50px;
  .nav{
    color: #71777c;
    font-size: 1.6rem;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    li{
      float: left;
      padding: 1rem;
      list-style: none;
      &:hover,.active{
        color: #007fff;
      }
    }
  }
  .demo-carousel{
    height: 36rem;
    width: 100%;
    background: transparent url('~@/assets/img/banner_bg3b8804.png') no-repeat center top;
  }
}
</style>
