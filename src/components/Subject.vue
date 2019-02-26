<template>
  <div>
    <FlexCard :left-title="leftTitle" :right-title="rightTitle">
      <div slot="leftContent" class="sub_card_container">
        <div class="sub_card_item"
             v-for="(item, index) in cardGroup"
             :key="index">
          <img :src="item.imgUrl">
          <div class="sub_card_item_shadow"/>
          <div class="sub_card_item_info">
            <div class="sub_card_item_info_desc">{{ item.desc }}</div>
            <Button type="primary" class="sub_card_item_info_btn">{{ btnText }}</Button>
          </div>
        </div>
      </div>

      <div slot="rightContent" class="sub_list_container">
        <div class="sub_list_item"
             v-for="(item, index) in listGroup"
             :key="index">
          <Icon type="md-arrow-dropright" color="#666"/>
          <a class="sub_list_item_content">{{ item.content }}</a>
        </div>
      </div>

    </FlexCard>
  </div>
</template>
<script>
  import FlexCard from '@/components/FlexCard'

  export default {
    components: {
      FlexCard
    },
    name: 'Interview',
    data () {
      return {
        leftTitle: '投融专题',
        rightTitle: '投融视界',
        btnText: '查看详情',
        cardGroup: [
          {
            imgUrl: 'https://www.trjcn.com/upfile/page_item/2018/11/812_1543373287.jpg',
            desc: '为切实发挥税收支持和服务民营经济发展的职能作用，国家税务总局印发了《关于实施进一步支持和服务民营经济发展若干措施的通知》',
          },
          {
            imgUrl: 'https://www.trjcn.com/upfile/page_item/2018/07/812_1530668312.jpg',
            desc: '一份动人而切实的商业计划书，可以为你吸引未来的合作伙伴……',
          },
          {
            imgUrl: 'https://www.trjcn.com/upfile/page_item/2018/07/812_1530858461.png',
            desc: '创投市场风涌云起，不少中小微企业面临着融资渠道单一、资金资源薄弱的困境。投融界凭借自身优势吸引了众多资金方手握巨资在平台上主动寻求好项目，继而帮助项目方获得企业发展所需的资金、资源等支持。',
          }
        ],
        listGroup: [
          {
            content: '喜讯！投融界第四年连任浙江省投融资协会副会长单位'
          },
          {
            content: '过完春节就相亲，这一对创投双方彼此看好（投融界第8期资本相亲汇成功举办）'
          },
          {
            content: '节后第一场融资活动，你准备好来路演了吗？（投融界融资微路演第179期成功举办）'
          },
          {
            content: '军民两用产品，石墨烯散热涂料已有成熟技术支撑|投融界专访徐嘉男'
          },
          {
            content: '经营传统中餐20年，钟情1碗苏式红汤面|投融界专访吴迪'
          },
          {
            content: '坐拥15吨黄金储量，做下一站贵金属市场赢家！|投融界专访刘江华'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.sub_card_item_info {
  display: none;
  width: 240px;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 36px;
}
.sub_card_item {
 margin-right: 24px;
 position: relative;
}
.sub_card_item:hover .sub_card_item_info {
  display: block;
}
.sub_card_container {
  width: 100%;
   display: flex;
  flex-direction: row;
  padding: 24px 0;
}
.sub_card_item_info_desc {
  color: #fff;
  width: 200px;
  height: 72px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-left: 24px;
  overflow: hidden;
}
.sub_card_item_shadow {
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 240px;
  height: 206px;
  background: #000;
  opacity: 0.55;
}
.sub_card_item:hover .sub_card_item_shadow {
  display: block;
}
.sub_card_item_info_btn {
  margin-left: 76px;
  margin-top: 16px;
}
.sub_list_item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
}
.sub_list_container {
  margin: 16px 24px;
}
.sub_list_item_content {
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
}
.sub_list_item_content:hover {
  color: #2d8cf0;
}
</style>
