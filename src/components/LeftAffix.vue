<template>
  <Anchor :offset-top="offsetTop" 
          :scroll-offset="scrollOffset"
          class="anchor_container">
    <AnchorLink :href="item.href" 
                :title="item.title"
                v-for="(item, index) in anchorGroup"
                :key="index"
                class="anchorlink_item"/>
  </Anchor>
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
        anchorGroup: [
          {
            href: '#founds',
            title: '找资金',
          },
          {
            href: '#successcase',
            title: '成功案例',
          },
          {
            href: '#investor',
            title: '直约投资者',
          },
          {
            href: '#project',
            title: '选项目',
          },
          {
            href: '#recommend',
            title: '每周推荐',
          },
          {
            href: '#interview',
            title: '投融专访',
          },
          {
            href: '#subject',
            title: '投融专题',
          },
        ]
      }
    },
    methods: {
      affixScroll () {
        console.log (123)
      }
    }
  }
</script>

<style scoped>
.anchor_container {
  z-index: 120;
  /* background: #fff; */
  /* border: 1px solid #e8e8e8; */

}
.anchorlink_item {
  /* height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 15px;
  color: #666;
  border-bottom: 1px solid #e8e8e8; */
  font-size: 14px;
}
/* .anchorlink_item:hover {
  background: #f8f8f9;
} */
</style>
