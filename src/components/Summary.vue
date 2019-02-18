<template>
  <div class="summary">
    <div class="summary_container">
      <div class="summary_flex_box" v-for="(item, index) in summaryMsgs" :key="index">
        
        <div class="summary_item_box">
          <div class='summary_first_item'>
            <span class="summary_number_style">{{ item.number }}</span>
            <span class="summary_units_style">{{ item.units }}</span>
          </div>
          <div class="summary_second_item">
            <Icon class="summary_icon_style" :type="item.icon" :size="16" color="#666"/>
            <span class="summary_label_style">{{ item.label }}</span>
          </div>
        </div>

        <Divider class="summary_divider" type="vertical"/>
      </div>
    
    </div>
  </div>
  
</template>
<script>
  export default {
    components: {
    },
    name: 'Banner',
    data () {
      return {
        value2: 0,
        msg: {
          title: '客服热线:',
          number: '400-858-9000',
          login: '登录',
          btntext: '资本机构免费入驻'
        },
        summaryMsgs: [
          {
            number: '24',
            units: '年',
            icon: 'md-analytics',
            label: '项目对接'
          },
          {
            number: '35',
            units: '万+',
            icon: 'md-card',
            label: '资金方'
          },
          {
            number: '310',
            units: '万+',
            icon: 'md-contacts',
            label: '项目方'
          },
          {
            number: '2,330',
            units: '亿+',
            icon: 'logo-markdown',
            label: '成功对接金额'
          },
          {
            number: '80,000',
            units: '亿',
            icon: 'md-medical',
            label: '平台资方总持有资金'
          },
          {
            number: '700',
            units: '场+',
            icon: 'md-microphone',
            label: '举办活动'
          },
        ]
      }
    }
  }
</script>

<style scoped>
.summary {
  border-bottom: 1px solid #ddd;
  background-color: #ffffff;
}

.summary_flex_box {
  display: flex;
  align-items: center;
}
.summary_first_item {
  text-align: end;
}
.summary_second_item {
  display: flex;
  align-items: center;
}
.summary_icon_style {
  margin-right: 6px;
  color: #666666
}
.summary_divider {
  height: 48px;
  margin-left: 54px;
}
.summary_container {
  height: 131px;
  width: 1200px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.summary_number_style {
  font-size: 36px;
  color: #bb0000;
}
.summary_units_style {
  font-size: 16px;
  color: #666666;
  line-height: 32px;
}
summary_icon_style {

}
.summary_label_style {
  font-size: 16px;
  color: #666666;
  line-height: 32px;
}
</style>
