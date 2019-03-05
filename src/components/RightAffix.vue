<template>
  <div>
    <Affix :offset-top="130">
      <div class="right_affix_item_one"/>
      <div class="right_affix_item_two"/>
      <div class="right_affix_item_three"/>
      <div class="right_affix_item_four"/>
    </Affix>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'LeftAffix',
    data () {
      return {
        offsetTop: 120,
        scrollOffset: 100,
      }
    },
    methods: {
      affixScroll () {
        console.log (123)
      }
    }
  }
</script>

<style>
.right_affix_item_one {
  background-image: url(../../static/zixun.png);
  width: 65px;
  height: 60px;
  transition: background 0.6s;
}
.right_affix_item_one:hover {
  background:url(../../static/zixun.png) no-repeat -65px 0px;
}
.right_affix_item_two {
  background-image: url(../../static/wechat.png);
  width: 65px;
  height: 60px;
  border-bottom: 1px solid f8f8f9;
  transition: background 0.6s;
}
.right_affix_item_two:hover {
  background:url(../../static/wechat.png) no-repeat -65px 0px;
}
.right_affix_item_three {
  background-image: url(../../static/service.png);
  width: 65px;
  height: 60px;
  transition: background 0.6s;
}
.right_affix_item_three:hover {
 background:url(../../static/service.png) no-repeat -65px 0px;
}
.right_affix_item_four {
  background-image: url(../../static/backtop.png);
  width: 65px;
  height: 30px;
  transition: background 0.6s;
}
.right_affix_item_four:hover {
 background:url(../../static/backtop.png) no-repeat -65px 0px;
}
</style>


